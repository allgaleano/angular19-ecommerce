import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { NgOptimizedImage } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent, NgOptimizedImage],
  template: `
    <div class="bg-white border border-[rgba(0,0,0,0.2)] w-full h-full shadow-md rounded-xl p-6 flex flex-col relative">
      <div class="flex flex-col items-center h-full">
        <div class="relative w-[90%] aspect-square mb-4">
          <img 
            [ngSrc]="product().image" 
            fill 
            priority 
            class="object-contain"
            [alt]="product().title"  
          />
        </div>
        <div class="flex flex-col h-full justify-between">
          <div class="flex flex-col gap-1">
            <span class="text-md font-bold">
              {{ product().title }}
            </span>
            <span class="text-sm">
              {{ '$' + product().price }}
            </span>
          </div>
          <app-button 
            label="Add to Cart" 
            class="mt-3" 
            (clicked)="cartService.addToCart(product())"
          />
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {

  cartService = inject(CartService);

  product = input.required<Product>();
}
