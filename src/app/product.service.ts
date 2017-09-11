import { Product } from './product';
import { PRODUCTS } from './mock-product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProductAll(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProductsSlowly(): Promise<Product[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getProductAll()), 2000);
    });
  }

  getProduct(id: number): Promise<Product> {
    return this.getProductAll()
               .then(products => products.find(product => product.id === id));
  }
}
