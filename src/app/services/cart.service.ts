import { Injectable, signal } from '@angular/core';
import { Product, CartItem } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<CartItem[]>([]);

  getTotalCartItems() {
    return this.cart().reduce((acc, item) => acc + item.quantity, 0);
  }

  addToCart(product: Product) {
    this.cart.update(items => {
      const existing = items.find(item => item.id === product.id);

      if (existing) {
        return items.map(
          item => item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  }

  removeFromCart(product: Product) {
    this.cart.update(items => {
      const existing = items.find(item => item.id === product.id);

      if (existing && existing.quantity > 1) {
        return items.map(
          item => item.id === product.id 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
        );
      }

      return items.filter(item => item.id !== product.id);
    });
  }

  getTotalPrice() {
    return this.cart().reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  }

  constructor() { }
}
