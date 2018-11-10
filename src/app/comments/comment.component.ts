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

}
