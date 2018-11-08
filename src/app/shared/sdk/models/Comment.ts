import {User} from './User';

declare var Object: any;

export interface CommentInterface {
  comment_id: number;
  user_id: number;
  user_name: string;
  comment_body: string;
  upvotes: number;
  downvotes: number;
  timestamp: string;
  user: User;
}

export class Comment implements CommentInterface {
  comment_id: number;
  user_id: number;
  user_name: string;
  comment_body: string;
  upvotes: number;
  downvotes: number;
  timestamp: string;
  user: User;
  constructor(data?: CommentInterface) {
    Object.assign(this, data);
  }
}
