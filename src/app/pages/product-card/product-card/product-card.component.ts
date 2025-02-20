import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { NgOptimizedImage } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, NgOptimizedImage],
  template: `
    <div class="bg-white w-full shadow-md rounded-xl p-6 flex flex-col relative">
      <div class="flex-1 flex flex-col">
        <div class="relative w-full aspect-square mb-4">
          <img 
            [ngSrc]="product().image" 
            fill 
            priority 
            class="object-contain"
            [alt]="product().title"  
          />
        </div>
        <div class="flex-1 flex flex-col">
          <span class="text-md font-bold">
            {{ product().title }}
          </span>
          <span class="text-sm">
            {{ '$' + product().price }}
          </span>
          <app-primary-button label="Add to Cart" class="mt-3" (btnClicked)="cartService.addToCart(product())"/>
        </div>

        <span class="absolute top-2 right-3 text-sm font-bold" [class]=" product().stock ? 'text-green-500' : 'text-red-500'">
          @if (product().stock) {
            {{ product().stock + ' left'}}
          } @else {
            {{ 'Out of stock' }}
          }
        </span>
      </div>
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {

  cartService = inject(CartService);

  product = input.required<Product>();
}
