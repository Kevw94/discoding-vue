import { reactive, readonly } from 'vue';
import { useCookies } from 'vue3-cookies';
import type { User } from '@/components/social/types/user.type'

const { cookies } = useCookies();

interface UserState {
  user: User | null;
}

const state = reactive<UserState>({
  user: null,
});

const setUser = (user: User) => {
  state.user = user;

  localStorage.setItem('user', JSON.stringify({
    id: user.id,
    username: user.username,
    email: user.email,
    bio: user.bio,
    friends: user.friends,
    blocked: user.blocked,
    sended_request: user.sended_request,
    received_requests: user.received_requests,
  }));

  cookies.set('token', user.token, { path: '/' });

};

const loadUser = () => {
  const userString = localStorage.getItem('user');
  if (userString) {
    state.user = JSON.parse(userString);
  }
};

const clearUser = () => {
  state.user = null;
  localStorage.removeItem('user');
  cookies.remove('token');
};

export default function useUserStore() {
  return {
    state: readonly(state),
    setUser,
    clearUser,
    loadUser,
  };
}
