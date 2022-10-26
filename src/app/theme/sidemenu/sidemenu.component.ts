import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuService } from '@core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidemenuComponent {
  // NOTE: Ripple effect make page flashing on mobile
  @Input() ripple = false;

  menu$ = this.menu.getAll();


  buildRoute = this.menu.buildRoute;

  constructor(private menu: MenuService) {
    console.log('🚀 ~ file: sidemenu.component.ts ~ line 15 ~ SidemenuComponent ~ menu$', this.menu$);

  }
}
