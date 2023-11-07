import { reactive, readonly } from 'vue';

interface UserState {
    user: null | { email: string; token: string };
}

const state = reactive<UserState>({
    user: null
})

const setUser = (email: string, token: string) => {
    state.user = { email, token };
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