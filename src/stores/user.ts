import { reactive, readonly } from 'vue';

interface UserState {
    user: null | {username: string, email: string; token: string, bio: string, friends: [], blocked: [] };
}

const state = reactive<UserState>({
    user: null
})

const setUser = (username: string, email: string, token: string, bio: string, friends: [], blocked: []) => {
    state.user = { username, email, token, bio, friends, blocked };
    console.log("ici setuser")
    console.log(username, email, token, bio, friends, blocked)
};
  
  const clearUser = () => {
    state.user = null;
};

export default function useUserStore() {
    return {
        state: readonly(state),
        setUser,
        clearUser,
    };
}