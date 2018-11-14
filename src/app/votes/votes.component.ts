import {Component, Input} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {Comment} from '../shared/sdk/models/Comment';
import {ThreadService} from '../shared/sdk/services/thread.service';
import {CommentService} from '../shared/sdk/services/comment.service';
import {NotificationService} from '../shared/services/notification.service';

type CommentOrThread = Comment | Thread;

@Component({
  selector: 'app-votes',
  template: `
    <div class="votes-container">
      <button class="vote-btn upvote" (click)="upvote()">
        <fa-icon class="vote-icon" icon="arrow-circle-up"></fa-icon>
      </button> {{ (model.upvotes || 0) - (model.downvotes || 0) }}
      <button class="vote-btn downvote" (click)="downvote()">
        <fa-icon class="vote-icon downvote" icon="arrow-circle-down"></fa-icon>
      </button>
    </div>
  `,
})
export class VotesComponent {

  @Input() model: Thread | Comment;
  @Input() type: 'thread' | 'comment';

  constructor(private threadService: ThreadService, private commentService: CommentService,
              private notificationService: NotificationService) { }

  upvote() {
    // TODO create union type to stop compiler complaining
    const { model, threadService, commentService, type } = this;
    if (type === 'thread') {
      threadService.upvote(model.thread_id)
        .subscribe((data: Thread) => {
          this.model = data;
        }, err => {
          this.handleError(err);
        });
    } else {
      commentService.upvote(model['comment_id'])
        .subscribe((data: Comment) => {
          this.model = data;
        }, err => {
          this.handleError(err);
        });
    }
  }

  downvote() {
    const { model, threadService, commentService, type } = this;

    if (type === 'thread') {
      threadService.downvote(model.thread_id)
        .subscribe((data: Thread) => {
          this.model = data;
      }, err => {
          this.handleError(err);
        });
    } else {
      commentService.downvote(model['comment_id'])
        .subscribe((data: Comment) => {
          this.model = data;
        }, err => {
          this.handleError(err);
        });
    }
  }

  private handleError(err) {
    this.notificationService.notifyError(err, 'Failed to save your vote! Please try again later.');
  }

}
