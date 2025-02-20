import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 1,
      title: "Backpack",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 29.95,
      stock: 10,
    },
    {
      id: 2,
      title: "Basic T-Shirt",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 9.95,
      stock: 5,
    }
  ]);

  addToCart(product: Product) {
    this.cart.update(items => [...items, product]);
  }

  removeFromCart(product: Product) {
    this.cart.update(items => items.filter(item => item.id !== product.id));
  }

  constructor() { }
}
