import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { CartItem, Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [NgOptimizedImage, ButtonComponent],
  template: `
    <div class="bg-white border border-[rgba(0,0,0,0.2)] shadow-md rounded-xl p-4 flex gap-4 items-center">
      <div>
        <span>x{{ item().quantity }}</span>
      </div>
      <div class="relative h-20 aspect-square">
        <img 
          [ngSrc]="item().image" 
          fill 
          priority
          class="object-contain"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">
          {{ item().title }}
        </span>
        <span class="text-sm">
          {{ '$' + item().price }}
        </span>
      </div>
      <div class="flex-1"></div>
      <app-button label="Remove" variant="destructive" size="sm" icon="heroTrashSolid" (clicked)="cartService.removeFromCart(item())"/>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<CartItem>();

  cartService = inject(CartService);
}
