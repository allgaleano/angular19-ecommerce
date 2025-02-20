import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "../product-card/product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 flex justify-center w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        @for (product of products(); track product.id) {
          <app-product-card [product]="product"/>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>([
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
    },
    {
      id: 3,
      title: "Mens Jacket",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 49.95,
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      price: 29.95,
      stock: 45
    }
  ]);
}
