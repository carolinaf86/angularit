import {NgModule} from '@angular/core';
import {IconsModule} from './icons.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgbCollapseModule
  ],
  exports: [
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgbCollapseModule
  ]
})
export class RequirementsModule { }
