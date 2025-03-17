package com.veda.supermarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.veda.supermarket.model.Product;
import com.veda.supermarket.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	public Product getProductById(Long id) {
		return productRepository.findById(id).orElse(null);
	}
	
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
	
	public Product updateProduct(Long id, Product product) {
		if(productRepository.existsById(id)) {
			product.setId(id);
			productRepository.save(product);
		}
		return null;
	}
	
	public void deleteById(Long id) {
		productRepository.deleteById(id);
	}
}
