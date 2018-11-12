import {Component, Input} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {Comment} from '../shared/sdk/models/Comment';
import {ThreadService} from '../shared/sdk/services/thread.service';
import {CommentService} from '../shared/sdk/services/comment.service';

@Component({
  selector: 'app-votes',
  template: `
    <div class="votes-container">
      <button class="vote-btn" (click)="upvote()">
        <fa-icon class="vote-icon" icon="arrow-circle-up"></fa-icon>
      </button> {{ (model.upvotes || 0) - (model.downvotes || 0) }}
      <button class="vote-btn" (click)="downvote()">
        <fa-icon class="vote-icon" icon="arrow-circle-down"></fa-icon>
      </button>
    </div>
  `,
})
export class VotesComponent {

  @Input() model: Thread | Comment;
  @Input() type: 'thread' | 'comment';

  constructor(private threadService: ThreadService, private commentService: CommentService) { }

  upvote() {
    // TODO create union type to stop compiler complaining
    const { model, threadService, commentService, type } = this;
    const observable = type === 'thread'
      ? threadService.upvote(model['thread_id'])
      : commentService.upvote(model['comment_id']);
    observable.subscribe((data: {}) => {
      this.model = data;
    });
  }

  downvote() {
    const { model, threadService, commentService, type } = this;
    const observable = type === 'thread'
      ? threadService.downvote(model['thread_id'])
      : commentService.downvote(model['comment_id']);
    observable.subscribe((data: Thread | Comment) => {
      this.model = data;
    });
  }

}
