import {NgModule} from '@angular/core';
import {IconsModule} from './icons.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [],
  imports: [
    IconsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule
  ],
  exports: [
    IconsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule
  ]
})
export class RequirementsModule { }
