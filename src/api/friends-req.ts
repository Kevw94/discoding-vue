import { http } from "./network/api"

export const addFriends = async (token: string, friendId: string) => {
    return await http.post('/users/addFriends', {
        userId: friendId,
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};

export const acceptFriend = async (token: string, friendId: string) => {
    return await http.post('users/acceptFriend', {
        userId: friendId,
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const declineFriend = async (token: string, friendId: string) => {
    return await http.post('users/declineFriend', {
        userId: friendId,
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const deleteFriend = async (token: string, friendId: string) => {
    return await http.post('users/deleteFriend', {
        userId: friendId,
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export const getUserInfos = async (token: string, userId: string) => {
    return await http.get(`/users/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}