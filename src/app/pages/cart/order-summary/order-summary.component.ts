import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ButtonComponent } from "../../../components/button/button.component";

@Component({
  selector: 'app-order-summary',
  imports: [ButtonComponent],
  template: `
    <div class="bg-slate-100 border border-[rgba(0,0,0,0.2)] p-6 rounded-xl shadow-xl">
      <h2 class="text-xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4 mt-2">
          <p class="text-lg">Total</p>
          <p class="font-bold">{{ '$' + total() }}</p>
        </div>
        <app-button label="Checkout" />
      </div>
    </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {
  cartService = inject(CartService);

  total = computed(() => {
    return this.cartService.getTotalPrice();
  });
}
