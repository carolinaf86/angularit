import {Component, Input} from '@angular/core';
import {Comment} from '../shared/sdk/models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})
export class CommentComponent {
  @Input() model: Comment;
  constructor() { }

  upvote() {
    // TODO call api
    this.model.upvotes = this.model.upvotes ? +this.model.upvotes + 1 : 1;
  }

  downvote() {
    // TODO call api
    this.model.downvotes = this.model.downvotes ? +this.model.downvotes + 1 : 1;
  }
}
