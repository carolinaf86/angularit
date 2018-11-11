import {User} from './User';
import {Comment} from './Comment';

declare var Object: any;

export interface ThreadInterface {
  thread_id?: string;
  thread_title?: string;
  thread_body?: string;
  upvotes?: number;
  downvotes?: number;
  timestamp?: string;
  user_id?: string;
  user_name?: string;
  user?: User;
  comments?: Comment[];
}

export class Thread implements ThreadInterface {
  thread_id?: string;
  thread_title?: string;
  thread_body?: string;
  upvotes?: number;
  downvotes?: number;
  timestamp?: string;
  user_id?: string;
  user_name?: string;
  user?: User;
  comments?: Comment[];
  constructor(data?: ThreadInterface) {
    Object.assign(this, data);
  }
}
