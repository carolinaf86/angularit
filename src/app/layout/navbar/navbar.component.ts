import {Component, Input} from '@angular/core';
import {LoggedService} from '../../shared/services/logged.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" routerLink="/">Angular<span>-it</span></a>
      <button class="navbar-toggler" type="button" (click)="isCollapsed = !isCollapsed" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div [ngbCollapse]="isCollapsed" class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-lg-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/login">Log in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/register">Register</a>
          </li>
          <li *ngIf="loggedUserId" class="nav-item">
            <a class="nav-link" routerLink="/user/">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = false;
  @Input() loggedUserId: string;
  constructor() { }
}
