import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroTrashSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, NgIcon],
  template: ` 
    <app-header />
    <router-outlet />
  `,
  styles: [],
  viewProviders: [provideIcons({ heroTrashSolid })]
})
export class AppComponent {}
