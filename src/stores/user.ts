import { reactive, readonly } from 'vue';

interface UserState {
    user: null | {id: string, username: string, email: string; token: string, bio: string, friends: [], blocked: [], sended_request: [], received_requests: [] };
}

const state = reactive<UserState>({
    user: null
})

const setUser = (id: string, username: string, email: string, token: string, bio: string, friends: [], blocked: [], sended_request: [], received_requests: []) => {
    state.user = { id, username, email, token, bio, friends, blocked, sended_request, received_requests };
    console.log(username, email, token, bio, friends, blocked, sended_request, received_requests)
};
  
  const clearUser = () => {
    state.user = null;
};

export default function useUserStore() {
    return {
        state: state,
        setUser,
        clearUser,
    };
}