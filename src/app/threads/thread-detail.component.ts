import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute} from '@angular/router';
import {LoggedService} from '../shared/services/logged.service';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {ThreadService} from '../shared/sdk/services/thread.service';
import {Comment} from '../shared/sdk/models/Comment';

@Component({
  selector: 'app-thread-detail',
  templateUrl: 'thread-detail.component.html',
  styleUrls: ['thread-detail.component.scss']
})
export class ThreadDetailComponent implements OnInit {

  model: Thread;
  addComment: Comment;

  form = new FormGroup({});
  fields: FormlyFieldConfig[];

  isLoggedIn: boolean;
  editing: boolean;
  showActions: boolean;

  constructor(private route: ActivatedRoute, private loggedService: LoggedService, private threadService: ThreadService) {
    this.fields = [
      {
        key: 'thread_title',
        type: 'textarea',
        templateOptions: {
          label: 'Title',
          placeholder: 'Add title',
          required: true,
          rows: 3
        }
      },
      {
        key: 'thread_body',
        type: 'textarea',
        templateOptions: {
          label: 'Body',
          placeholder: 'Add more information...',
          rows: 6
        }
      }
    ];
  }

  ngOnInit(): void {

    // Set editing to true if id is 'add';
    this.editing = this.route.snapshot.paramMap.get('id') === 'add';

    this.route.data.subscribe((data: { thread: Thread }) => {
      this.model = data.thread;
      this.addComment = new Comment({thread_id: data.thread.thread_id});
      this.showActions = this.model.user_id === this.loggedService.getLoggedUserId();
    });

    this.isLoggedIn = this.loggedService.isLoggedIn();

  }

  onLoggedOut() {
    this.isLoggedIn = false;
  }

  onEdit() {
    this.editing = true;
  }

  onCancel() {
    // TODO reset model!
    this.editing = false;
  }

  submit(data: Thread) {
    // TODO double check user is allowed to edit

    const observable = data.thread_id
      ? this.threadService.update(data)
      : this.threadService.create(data);
    observable.subscribe((result: Thread) => {
      this.model = result;
      this.editing = false;
      // TODO notify success
    }, err => {
      // TODO handle error
    });
  }
}
