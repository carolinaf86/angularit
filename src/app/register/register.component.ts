import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/sdk/models/User';
import {UserService} from '../shared/sdk/services/user.service';
import {AuthService} from '../shared/services/auth.service';
import {AuthToken} from '../shared/sdk/models/Auth';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../shared/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {
  model = new User();
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'user_name',
      type: 'input',
      templateOptions: {
        placeholder: 'Username',
        required: true
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        placeholder: 'Email',
        required: true,
      },
      validators: {
        validation: [Validators.email],
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        placeholder: 'Password',
        required: true
      },
      validators: {
        min: Validators.min(8)
      },
      validation: {
        messages: {
          min: 'Password must be at least 8 characters.'
        }
      }
    }
  ];
  private returnUrl: string;

  constructor(private userService: UserService, private loggedService: AuthService, private route: ActivatedRoute,
              private router: Router, private notificationService: NotificationService) {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit(data) {
    this.userService.register(data)
      .subscribe((result: AuthToken) => {
        if (!result.auth_token) {
          this.notificationService.notifyError(null, 'An unexpected error has occurred. Please try again later.');
        } else {
          this.notificationService.notifySuccess('Success!');
          this.loggedService.setLoggedUser(result);
          this.router.navigateByUrl(this.returnUrl);
        }
      },
        err => {
          this.notificationService.notifyError(err, 'An unexpected error has occurred. Please try again later.');
        });
  }

}
