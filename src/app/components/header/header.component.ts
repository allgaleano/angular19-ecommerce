import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 border-b border-[rgba(0,0,0,0.2)] px-4 py-3 shadow-md flex justify-between items-center w-screen">
      <button class="text-xl hover:cursor-pointer" routerLink="/">My Store</button>
      <app-button 
        [label]="'Cart('+ cartService.getTotalCartItems() + ')'" 
        routerLink="/cart"
      />
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

  cartService = inject(CartService);
}
