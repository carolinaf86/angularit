declare var Object: any;

export interface CommentInterface {
  comment_id?: string;
  thread_id?: string;
  user_id?: string;
  user_name?: string;
  comment_body?: string;
  upvotes?: number;
  downvotes?: number;
  timestamp?: string;
}

export class Comment implements CommentInterface {
  comment_id?: string;
  thread_id?: string;
  user_id?: string;
  user_name?: string;
  comment_body?: string;
  upvotes?: number;
  downvotes?: number;
  timestamp?: string;
  constructor(data?: CommentInterface) {
    Object.assign(this, data);
  }
}
