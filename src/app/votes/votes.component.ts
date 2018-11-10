import {Component, Input} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {Comment} from '../shared/sdk/models/Comment';

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

  constructor() { }

  upvote() {
    // TODO call api dependent on type
    this.model.upvotes = this.model.upvotes ? +this.model.upvotes + 1 : 1;
  }

  downvote() {
    // TODO call api
    this.model.downvotes = this.model.downvotes ? +this.model.downvotes + 1 : 1;
  }

}
