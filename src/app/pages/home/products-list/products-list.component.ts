import { Component, signal } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ProductCardComponent } from "../product-card/product-card.component";

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
  
  products = signal<Product[]>([]);

  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json();
    this.products.set(data);
  } 

}
