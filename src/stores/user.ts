import { reactive, readonly } from 'vue';

interface UserState {
    user: null | {username: string, email: string; token: string };
}

const state = reactive<UserState>({
    user: null
})

const setUser = (username: string, email: string, token: string) => {
    state.user = { username, email, token };
    console.log("ici setuser")
    console.log(username, email, token)
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