import {Component, Input} from '@angular/core';
import {Thread} from '../../shared/sdk/models/Thread';

@Component({
  selector: 'app-thread-list-item',
  templateUrl: 'thread-list-item.component.html',
  styleUrls: ['thread-list-item.component.scss']
})
export class ThreadListItemComponent {

  @Input() model: Thread;

  constructor() { }

}


