package com.abhay.ecommerce.product.config;

import com.abhay.ecommerce.product.model.Product;
import com.abhay.ecommerce.product.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedProducts(ProductRepository repository) {
        return args -> {
            if (repository.count() > 0) {
                return;
            }
            repository.saveAll(List.of(
                new Product("Wireless Headphones", "Noise-cancelling over-ear headphones", new BigDecimal("129.99"), 50, "https://picsum.photos/seed/headphones/400", "Electronics"),
                new Product("Mechanical Keyboard", "RGB backlit mechanical keyboard", new BigDecimal("89.99"), 80, "https://picsum.photos/seed/keyboard/400", "Electronics"),
                new Product("Running Shoes", "Lightweight breathable running shoes", new BigDecimal("74.50"), 120, "https://picsum.photos/seed/shoes/400", "Footwear"),
                new Product("Coffee Mug", "Ceramic 350ml coffee mug", new BigDecimal("12.99"), 200, "https://picsum.photos/seed/mug/400", "Home"),
                new Product("Backpack", "Water-resistant 25L laptop backpack", new BigDecimal("49.99"), 60, "https://picsum.photos/seed/backpack/400", "Accessories"),
                new Product("Smart Watch", "Fitness tracking smart watch", new BigDecimal("159.00"), 40, "https://picsum.photos/seed/watch/400", "Electronics")
            ));
        };
    }
}
