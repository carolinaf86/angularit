import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  loggedUserId: string;
  constructor(private loggedService: AuthService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.loggedUserId = this.loggedService.getLoggedUserId();
  }

  logout() {
    this.loggedService.clearLoggedUser();
    this.loggedUserId = null;
    this.notificationService.notifySuccess(`You've been logged out.`);
    this.router.navigate(['/login']);
  }

  onAdd() {
    if (!this.loggedUserId) this.notificationService.notifySuccess('You need to log in to create a post!');
    const commands = this.loggedUserId ? ['threads', 'add'] : ['login'];
    this.router.navigate(commands);
  }
}
