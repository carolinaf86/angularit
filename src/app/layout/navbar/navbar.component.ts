import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

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
          <li>
            <button class="d-none d-lg-inline btn btn-highlight btn-circle mr-2" type="button" (click)="onAdd()">
              <fa-icon icon="plus"></fa-icon>
            </button>
          </li>
          <li class="nav-item">
            <a *ngIf="!loggedUserId;else logoutLink" class="nav-link" routerLink="/login">Log in</a>
            <ng-template #logoutLink>
              <a class="nav-link" (click)="logout()">Logout</a>
            </ng-template>
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
export class NavbarComponent implements OnInit {
  @Output() loggedOut: EventEmitter<boolean> = new EventEmitter<boolean>();
  isCollapsed = false;
  loggedUserId: string;
  constructor(private loggedService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUserId = this.loggedService.getLoggedUserId();
  }

  logout() {
    this.loggedService.clearLoggedUser();
    this.loggedUserId = null;
    this.loggedOut.emit(true);
  }

  onAdd() {
    this.router.navigate(['threads', 'add']);
  }
}
