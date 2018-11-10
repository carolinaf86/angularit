import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" routerLink="/"><span>Angular</span>-it</a>
    </nav>
  `,
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
  constructor() { }
}
