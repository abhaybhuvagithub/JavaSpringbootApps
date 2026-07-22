package com.abhay.ecommerce.order.client;

import com.abhay.ecommerce.order.dto.ProductResponse;
import com.abhay.ecommerce.order.exception.ResourceNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class ProductClient {

    private final RestClient restClient;

    public ProductClient(RestClient productRestClient) {
        this.restClient = productRestClient;
    }

    public ProductResponse getProduct(Long productId) {
        ProductResponse product = restClient.get()
                .uri("/api/products/{id}", productId)
                .retrieve()
                .body(ProductResponse.class);
        if (product == null) {
            throw new ResourceNotFoundException("Product not found with id " + productId);
        }
        return product;
    }

    public void decrementStock(Long productId, int quantity) {
        restClient.patch()
                .uri("/api/products/{id}/decrement-stock?quantity={q}", productId, quantity)
                .retrieve()
                .toBodilessEntity();
    }
}
