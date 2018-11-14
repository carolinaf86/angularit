import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {ThreadService} from '../shared/sdk/services/thread.service';
import {Comment} from '../shared/sdk/models/Comment';
import {NotificationService} from '../shared/services/notification.service';

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
              private router: Router, private notificationService: NotificationService) {
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
        type: 'richtext',
        templateOptions: {
          label: 'Body',
          placeholder: 'Add more information...',
          required: true,
          rows: 6,
          richtext: {
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{'script': 'sub'}, {'script': 'super'}],
                [{'color': []}, {'background': []}]
              ]
            }
          }
        }
      }
    ];
  }

  ngOnInit(): void {

    this.route.data.subscribe((data: { thread: Thread }) => {

      // Set editing to true if id is 'add';
      this.editing = this.isNew = this.route.snapshot.paramMap.get('id') === 'add';

      this.model = data.thread;

      // Clone model for editing
      this.data = {...this.model};

      // Create an empty comment
      this.addComment = new Comment({thread_id: data.thread.thread_id});
      this.showActions = +this.model.user_id === +this.loggedService.getLoggedUserId();

    }, err => {
      this.notificationService.notifyError(err, `Oops! We're having problems loading this thread right now.`)
    });

    this.isLoggedIn = this.loggedService.isLoggedIn();

  }

  onEdit() {
    this.editing = true;
  }

  onCancel() {
    if (this.isNew) {
      return this.router.navigate(['/']);
    }
    // Reset form
    this.data = {...this.model};
    this.editing = false;
  }

  onDelete() {
    // TODO confirm delete

    if (this.isNew) {
      // Navigate to home
      return this.router.navigateByUrl('/');
    }
    // Check user has right to perform action
    if (+this.loggedService.getLoggedUserId() !== +this.model.user_id) {
      this.notificationService.notifyError(null, 'You cannot delete a thread posted by another user!');
      return this.router.navigateByUrl('/');
    }
    this.threadService.delete(this.model.thread_id)
      .subscribe(result => {
        this.notificationService.notifySuccess('Thread successfully deleted!');
        this.router.navigate(['/']);
      }, err => {
        this.notificationService.notifyError(err, 'Failed to delete thread. Please try again later.');
      });
  }

  submit(data: Thread) {
    // Check user has right to perform action
    if (!this.isNew && this.loggedService.getLoggedUserId() !== this.model.user_id) {
      this.notificationService.notifyError(null, 'You cannot update a thread posted by another user!');
      return this.router.navigateByUrl('/');
    }

    const observable = data.thread_id
      ? this.threadService.update(data)
      : this.threadService.create(data);
    observable.subscribe((result: Thread) => {

      if (result['form_errors']) {
        this.notificationService.notifyError(null, 'Thread not created. There are errors in the form.');
      }

      this.model = result;
      this.editing = false;
      this.showActions = true;

      this.notificationService.notifySuccess('Thread saved successfully!');

      if (this.isNew) {
        this.router.navigate(['threads', result.thread_id]);
      }
      }, err => {
        this.notificationService.notifyError(err, 'Failed to save thread. Please try again later.');
    });
  }
}
