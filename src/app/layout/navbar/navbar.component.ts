import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" routerLink="/">Angular<span>-it</span></a>
    </nav>
  `,
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
  constructor() { }
}
