package com.veda.supermarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veda.supermarket.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
