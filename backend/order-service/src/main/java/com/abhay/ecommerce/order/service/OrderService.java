package com.abhay.ecommerce.order.service;

import com.abhay.ecommerce.order.client.ProductClient;
import com.abhay.ecommerce.order.dto.OrderItemRequest;
import com.abhay.ecommerce.order.dto.OrderRequest;
import com.abhay.ecommerce.order.dto.ProductResponse;
import com.abhay.ecommerce.order.exception.ResourceNotFoundException;
import com.abhay.ecommerce.order.model.Order;
import com.abhay.ecommerce.order.model.OrderItem;
import com.abhay.ecommerce.order.model.OrderStatus;
import com.abhay.ecommerce.order.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {

    private final OrderRepository repository;
    private final ProductClient productClient;

    public OrderService(OrderRepository repository, ProductClient productClient) {
        this.repository = repository;
        this.productClient = productClient;
    }

    public List<Order> findAll() {
        return repository.findAll();
    }

    public Order findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + id));
    }

    @Transactional
    public Order placeOrder(OrderRequest request) {
        Order order = new Order();
        order.setCustomerName(request.customerName());
        order.setCustomerEmail(request.customerEmail());

        BigDecimal total = BigDecimal.ZERO;
        for (OrderItemRequest itemReq : request.items()) {
            ProductResponse product = productClient.getProduct(itemReq.productId());
            if (product.stock() < itemReq.quantity()) {
                throw new IllegalArgumentException("Insufficient stock for product " + product.name());
            }
            OrderItem item = new OrderItem();
            item.setProductId(product.id());
            item.setProductName(product.name());
            item.setUnitPrice(product.price());
            item.setQuantity(itemReq.quantity());
            order.addItem(item);
            total = total.add(product.price().multiply(BigDecimal.valueOf(itemReq.quantity())));
        }

        order.setTotalAmount(total);
        Order saved = repository.save(order);

        // Reserve stock in product-service after the order is persisted
        for (OrderItem item : saved.getItems()) {
            productClient.decrementStock(item.getProductId(), item.getQuantity());
        }
        return saved;
    }

    @Transactional
    public Order updateStatus(Long id, OrderStatus status) {
        Order order = findById(id);
        order.setStatus(status);
        return repository.save(order);
    }
}
