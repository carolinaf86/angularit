import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
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
  data: Thread;
  addComment: Comment;
  isNew: boolean;

  form = new FormGroup({});
  fields: FormlyFieldConfig[];

  isLoggedIn: boolean;
  editing: boolean;
  showActions: boolean;

  constructor(private route: ActivatedRoute, private loggedService: AuthService, private threadService: ThreadService,
              private router: Router) {
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
          required: true,
          rows: 6
        }
      }
    ];
  }

  ngOnInit(): void {

    // Set editing to true if id is 'add';
    this.editing = this.isNew = this.route.snapshot.paramMap.get('id') === 'add';

    this.route.data.subscribe((data: { thread: Thread }) => {
      this.model = data.thread;

      // Clone model for editing
      this.data = {...this.model};

      // Create an empty comment
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
    this.isNew
      ? this.router.navigate(['/'])
      : this.editing = false;
  }

  onDelete() {
    console.log('Deleting');
    if (this.isNew) {
      console.log('Cannot delete a new thread');
    }
    // Check user has right to perform action
    if (this.loggedService.getLoggedUserId() !== this.model.user_id) {
      // TODO throw error and return
    }
    this.threadService.delete(this.model.thread_id)
      .subscribe(result => {
        // TODO notify success
        this.router.navigate(['/']);
      });
  }

  submit(data: Thread) {
    // Check user has right to perform action
    if (!this.isNew && this.loggedService.getLoggedUserId() !== this.model.user_id) {
      // TODO handle error and return
    }

    const observable = data.thread_id
      ? this.threadService.update(data)
      : this.threadService.create(data);
    observable.subscribe((result: Thread) => {

      if (result['form_errors']) {
        // TODO handle error
      }
      this.model = result;
      this.editing = false;

      // TODO notify success
    }, err => {
      // TODO handle error
    });
  }
}
