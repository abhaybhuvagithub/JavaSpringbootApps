package com.abhay.ecommerce.order.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class RestClientConfig {

    @Value("${product-service.url:http://localhost:8081}")
    private String productServiceUrl;

    @Bean
    public RestClient productRestClient(RestClient.Builder builder) {
        return builder.baseUrl(productServiceUrl).build();
    }
}
