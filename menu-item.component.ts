import { Component, effect, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../custom-sidenav/custom-sidenav.component';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: 'Opx' }),
        animate('500ms ease-in-out', style({ opacity:1, height: '*' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity:0, height: '0px' }))
      ])
    ])
  ],
  imports: [RouterModule,MatListModule,MatIconModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  item = input.required<MenuItem>();

  collapsed = input(false);

  nestedMenuOpen = signal(false)

  routeHistory = input('');

  logRoutes = effect(() => console.log(this.routeHistory()))

  toggleNested(){
    if(!this.item().subItems){
      return;
    }

    this.nestedMenuOpen.set(!this.nestedMenuOpen());

  }

}
