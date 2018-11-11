import {NgModule} from '@angular/core';
import {IconsModule} from './icons.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    IconsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgbCollapseModule
  ],
  exports: [
    IconsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgbCollapseModule
  ]
})
export class RequirementsModule { }
