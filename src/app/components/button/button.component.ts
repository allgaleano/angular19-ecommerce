import { Component, input, output } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

type ButtonVariant = 'default' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [NgIconComponent],
  template: `
    <button
      [class]="getButtonClasses()"
      (click)="btnClicked.emit()">
      
      @if (icon()) {
        <ng-icon 
          [name]="icon()" 
          [size]="getIconSize()" 
        />
      }
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');
  variant = input<ButtonVariant>('default');
  size = input<ButtonSize>('md');
  icon = input<string>();

  btnClicked = output();

  getButtonClasses():string {
    const baseClasses = 'w-full shadow-md rounded-xl hover:cursor-pointer flex gap-2 items-center justify-center';

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2',
      lg: 'px-6 py-3 text-lg'
    };

    const variantClasses = {
      default: 'bg-blue-500 text-white hover:opacity-90',
      destructive: 'bg-red-100 text-red-600 hover:bg-red-200 font-semibold border border-red-600',
    };

    return `${baseClasses} ${sizeClasses[this.size()]} ${variantClasses[this.variant()]}`;
  }

  getIconSize():string {
    const sizes = {
      sm: '16',
      md: '20',
      lg: '24'
    }

    return sizes[this.size()];
  }
}
