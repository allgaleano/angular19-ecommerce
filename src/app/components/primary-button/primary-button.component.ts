import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-blue-500 text-white w-full px-5 py-2 shadow-md rounded-xl hover:opacity-90 hover:cursor-pointer" 
      (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');
  
  btnClicked = output();
}
