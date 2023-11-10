export interface Friend {
    id: string;
    username: string;
    email: string;
    bio: string;
}

export interface FriendList {
    friendList: Array<Friend>;
}

export interface FriendIdsList {
    friendIdsList: Array<String>; 
}