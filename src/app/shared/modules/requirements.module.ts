import {NgModule} from '@angular/core';
import {IconsModule} from './icons.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {NgbCollapseModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {NotifierModule} from 'angular-notifier';
import {NOTIFIER_CONFIG} from '../services/notification.service';

@NgModule({
  declarations: [],
  imports: [
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgbCollapseModule,
    NgbTabsetModule,
    NotifierModule.withConfig(NOTIFIER_CONFIG)
  ],
  exports: [
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgbCollapseModule,
    NgbTabsetModule,
    NotifierModule
  ]
})
export class RequirementsModule { }
