import { Component, computed, input, output } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { ButtonSize, ButtonVariant } from './button.types';
import { BUTTON_STYLES } from './button.styles';

@Component({
  selector: 'app-button',
  imports: [NgIconComponent],
  template: `
    <button
      [class]="getButtonClasses()"
      [disabled]="disabled()"
      [attr.aria-label]="ariaLabel()"
      [attr.type]="type()"
      (click)="clicked.emit($event)">

      @if (icon()) {
        <ng-icon 
          [name]="icon()" 
          [size]="getIconSize()" 
        />
      }
      @if (label()) {
        <span>{{ label() }}</span>
      }
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');
  variant = input<ButtonVariant>('default');
  size = input<ButtonSize>('md');
  icon = input<string>();
  disabled = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');
  ariaLabel = input<string>();

  clicked = output<MouseEvent>();

  private variantState = computed(() => 
    this.disabled() ? 'disabled' : 'enabled'
  );

  getButtonClasses():string {
    const classes = [
      BUTTON_STYLES.base,
      BUTTON_STYLES.sizes[this.size()],
      BUTTON_STYLES.variants[this.variant()][this.variantState()]
    ];

    return classes.join(' ');
  };

  getIconSize():string { 
    return BUTTON_STYLES.iconSizes[this.size()]
  };
}