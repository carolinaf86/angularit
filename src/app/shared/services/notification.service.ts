import {Injectable} from '@angular/core';
import {NotifierOptions, NotifierService} from 'angular-notifier';

export const NOTIFIER_CONFIG: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 64,
      gap: 10
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private readonly notifier: NotifierService;

  constructor( notifierService: NotifierService ) {
    this.notifier = notifierService;
  }

  public notifySuccess(message?: string) {
    this.notifier.notify( 'success',  message || 'Success!' );
  }

  public notifyError(err?: Error, message?: string) {
    if (err) { console.error(err); }
    this.notifier.notify( 'error', message || 'An unexpected error has occurred.' );
  }

}
