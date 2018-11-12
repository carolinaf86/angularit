import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/sdk/services/user.service';
import {AuthToken, Credentials} from '../shared/sdk/models/Auth';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  model = new Credentials();
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
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
      }
    }
  ];
  private returnUrl: string;

  constructor(private userService: UserService, private loggedService: AuthService, private route: ActivatedRoute,
              private router: Router) {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit(data) {
    this.userService.login(data)
      .subscribe((result: AuthToken) => {
        // Check if user has been found
        if (!result.auth_token) {
          // TODO deal with error
        } else {
          // TODO notify
          this.loggedService.setLoggedUser(result);
          this.router.navigateByUrl(this.returnUrl);
        }
      },
        err => {
          // TODO handle error
        });
  }

}
