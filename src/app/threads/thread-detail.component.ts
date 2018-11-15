import {Component, OnInit} from '@angular/core';
import {Thread} from '../shared/sdk/models/Thread';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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

  constructor(private route: ActivatedRoute, private authService: AuthService, private threadService: ThreadService,
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
        },
        validators: {
          max: {
            expression: (control: FormControl): boolean => {
              if (!control.value) {
                return true;
              }
              return control.value.length < 255;
            },
            message: 'Title cannot be longer than 255 characters.'
          }
        }
      },
      {
        key: 'thread_body',
        type: 'richtext',
        templateOptions: {
          label: 'Body',
          placeholder: 'Add more information...',
          required: true,
          richtext: {
            min: 1,
            max: 64000,
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{'script': 'sub'}, {'script': 'super'}],
                [{'color': []}, {'background': []}]
              ]
            }
          }
        },
        validators: {
          max: {
            expression: (control: FormControl): boolean => {
              if (!control.value) {
                return true;
              }
              return control.value.length < 64000;
            },
            message: 'Body cannot be longer than 64,000 characters.'
          }
        }
      }
    ];
  }

  ngOnInit(): void {

    const { authService, notificationService, route } = this;

    route.data.subscribe((data: { thread: Thread }) => {

      // Set editing to true if id is 'add';
      this.editing = this.isNew = this.route.snapshot.paramMap.get('id') === 'add';

      this.model = data.thread;

      // Clone model for editing
      this.data = {...this.model};

      // Create an empty comment
      this.addComment = new Comment({thread_id: data.thread.thread_id});
      this.showActions = +this.model.user_id === +authService.getAuthenticatedUserId();

    }, err => {
      notificationService.notifyError(err, `Oops! We're having problems loading this thread right now.`);
    });

    this.isLoggedIn = authService.isAuthenticated();

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

    const {router, isNew, authService, notificationService, threadService, model} = this;

    if (isNew) {
      // Navigate to home
      return router.navigateByUrl('/');
    }
    // Check user has right to perform action
    if (+authService.getAuthenticatedUserId() !== +model.user_id) {
      notificationService.notifyError(null, 'You cannot delete a thread posted by another user!');
      return router.navigateByUrl('/');
    }
    threadService.delete(model.thread_id)
      .subscribe(() => {
        notificationService.notifySuccess('Thread successfully deleted!');
        router.navigate(['/']);
      }, err => {
        notificationService.notifyError(err, 'Failed to delete thread. Please try again later.');
      });
  }

  submit(data: Thread) {

    const { form, isNew, authService, notificationService, router, model, threadService} = this;

    if (form.invalid) { return; }

    // Check user has right to perform action
    if (!isNew && authService.getAuthenticatedUserId() !== model.user_id) {
      notificationService.notifyError(null, 'You cannot update a thread posted by another user!');
      return router.navigateByUrl('/');
    }

    const observable = data.thread_id
      ? threadService.update(data)
      : threadService.create(data);
    observable.subscribe((result: Thread) => {

      if (result['form_errors']) {
        return notificationService.notifyError(null, 'Thread not created. There are errors in the form.');
      }

      this.model = result;
      this.editing = false;
      this.showActions = true;

      notificationService.notifySuccess('Thread saved successfully!');

      if (isNew) {
        router.navigate(['threads', result.thread_id]);
      }
    }, err => {
      notificationService.notifyError(err, 'Failed to save thread. Please try again later.');
    });
  }
}
