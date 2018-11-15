import {Component, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'app-formly-rich-text',
  template: `
    <quill-editor [id]="field.id"
                  [maxLength]="to.richtext.max"
                  [minLength]="to.richtext.min"
                  [modules]="to.richtext.modules"
                  [readOnly]="to.disabled"
                  [style]="{height: to.richtext.height || '150px'}"
                  [formControl]="formControl">
    </quill-editor>
  `,
})
export class FormlyRichTextComponent extends FieldType implements OnInit {

  ngOnInit(): void {
    this.to.modules = this.to.modules || {};
    super.ngOnInit();
  }

}

