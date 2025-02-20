import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <div class="flex flex-col p-8 gap-4 max-w-[1200px] mx-auto">
      <h1 class="text-2xl">Shopping Cart</h1>
      @for (item of cartService.cart(); track item.id) {
        <app-cart-item [item]="item" />
      }
    </div>
  `,
  styles: ``
})
export class CartComponent {
  cartService = inject(CartService);
}
