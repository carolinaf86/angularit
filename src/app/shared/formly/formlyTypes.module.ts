import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormlyRichTextComponent} from './types/richtext';
import {QuillModule} from 'ngx-quill';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export const FORMLY_CONFIG = {
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
