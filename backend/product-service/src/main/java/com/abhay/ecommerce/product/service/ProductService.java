package com.abhay.ecommerce.product.service;

import com.abhay.ecommerce.product.dto.ProductRequest;
import com.abhay.ecommerce.product.exception.ResourceNotFoundException;
import com.abhay.ecommerce.product.model.Product;
import com.abhay.ecommerce.product.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> findAll() {
        return repository.findAll();
    }

    public Product findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + id));
    }

    public List<Product> search(String name) {
        return repository.findByNameContainingIgnoreCase(name);
    }

    @Transactional
    public Product create(ProductRequest request) {
        Product product = new Product(request.name(), request.description(), request.price(),
                request.stock(), request.imageUrl(), request.category());
        return repository.save(product);
    }

    @Transactional
    public Product update(Long id, ProductRequest request) {
        Product product = findById(id);
        product.setName(request.name());
        product.setDescription(request.description());
        product.setPrice(request.price());
        product.setStock(request.stock());
        product.setImageUrl(request.imageUrl());
        product.setCategory(request.category());
        return repository.save(product);
    }

    @Transactional
    public void delete(Long id) {
        Product product = findById(id);
        repository.delete(product);
    }

    @Transactional
    public Product decrementStock(Long id, int quantity) {
        Product product = findById(id);
        if (product.getStock() < quantity) {
            throw new IllegalArgumentException("Insufficient stock for product " + id);
        }
        product.setStock(product.getStock() - quantity);
        return repository.save(product);
    }
}
