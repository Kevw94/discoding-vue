export interface User {
    id: string;
    username: string;
    email: string;
    token: string;
    bio: string;
    friends: Array<any>;
    blocked: Array<any>;
    sended_request: Array<any>;
    received_requests: Array<any>;
  }