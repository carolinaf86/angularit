import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../shared/sdk/models/Comment';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {CommentService} from '../shared/sdk/services/comment.service';
import {LoggedService} from '../shared/services/logged.service';

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() model: Comment;

  editing: boolean;

  data: Comment;
  form = new FormGroup({});
  fields: FormlyFieldConfig[];
  isNew: boolean;
  showEdit: boolean;

  constructor(private commentService: CommentService, private loggedService: LoggedService) {
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

  ngOnInit(): void {
    this.editing = this.isNew = !this.model.comment_id;

    // Ensure model is not edited in place in case changes are cancelled
    this.data = {...this.model};

    // Only allow edit on comments for logged user
    this.showEdit = this.model.user_id === this.loggedService.getLoggedUserId();
  }

  onEdit() {
    this.editing = true;
  }

  submit(data: Comment) {

    const updateOrCreate = this.isNew ? this.commentService.create(data) : this.commentService.update(data);

    updateOrCreate
      .subscribe((result: Comment) => {
        this.model = result;
        this.editing = false;
        this.showEdit = true;
    }, err => {
      // TODO handle error
    });
  }

}
