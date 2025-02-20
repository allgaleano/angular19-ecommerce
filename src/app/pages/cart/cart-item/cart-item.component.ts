import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [NgOptimizedImage, PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md rounded-xl p-4 flex gap-4 items-center">
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
      <div></div>
      <app-button label="Remove" variant="destructive" size="sm" icon="heroTrashSolid" (btnClicked)="cartService.removeFromCart(item())"/>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
  item = input.required<Product>();

  cartService = inject(CartService);
}
