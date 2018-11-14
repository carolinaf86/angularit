import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'app-formly-rich-text',
  template: `
    <quill-editor [maxLength]="to.richtext.maxLength"
                  [minLength]="0"
                  [modules]="to.richtext.modules"
                  [readOnly]="to.disabled"
                  [style]="{height: to.richtext.height || '150px'}"
                  [formControl]="formControl">
    </quill-editor>
  `,
})
export class FormlyRichTextComponent extends FieldType {

  get type() {
    return 'richtext';
  }

}

