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

export const displayUserInfos = async (token: string, friendId: string) => {
    return await http.post(`/users/${friendId}`,  {
        friendId: friendId,
    },
    {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}