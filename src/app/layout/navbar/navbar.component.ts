import {Component, OnInit} from '@angular/core';
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
  userId: string;

  constructor(private authService: AuthService,
              private router: Router,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser()
    this.userId = this.authService.getAuthenticatedUserId();
  }

  logout() {
    this.authService.clearAuthenticatedUser();
    this.userId = null;
    this.notificationService.notifySuccess(`You've been logged out.`);
    this.router.navigate(['/login']);
  }

  onAdd() {
    if (!this.userId) { this.notificationService.notifySuccess('You need to log in to create a post!'); }
    const commands = this.userId ? ['threads', 'add'] : ['login'];
    this.router.navigate(commands);
  }
}
