import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {
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
      }
    }
  ];

  constructor() {

  }

  submit() {
    console.log('Registering new user and logging in');
    // TODO create user and log in
  }

}
