import {NgModule} from '@angular/core';
import {FormlyRichTextComponent} from './types/richtext';
import {QuillModule} from 'ngx-quill';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfigOption} from '@ngx-formly/core';

export const FORMLY_CONFIG: ConfigOption = {
  types: [
    { name: 'richtext', component: FormlyRichTextComponent, extends: 'textarea'},
  ],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'email', message: 'Must be a valid email address'}
  ]
};

@NgModule({
  imports: [
    QuillModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormlyRichTextComponent
  ],
  exports: [
  ]
})
export class FormlyTypesModule { }
