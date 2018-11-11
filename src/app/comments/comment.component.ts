import {Component, Input} from '@angular/core';
import {Comment} from '../shared/sdk/models/Comment';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {CommentService} from '../shared/sdk/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})
export class CommentComponent {

  @Input() model: Comment;

  form = new FormGroup({});
  fields: FormlyFieldConfig[];

  constructor(private commentService: CommentService) {
    this.fields = [
      {
        key: 'comment_body',
        type: 'textarea',
        templateOptions: {
          placeholder: 'Add a comment...',
          required: true,
          rows: 6
        }
      }
    ];
  }

  submit(data: Comment) {
    this.commentService.create(data)
      .subscribe((result: Comment) => {
        this.model = result;
    }, err => {
      // TODO handle error
    });
  }

}
