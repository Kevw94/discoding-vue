import { useCookies } from 'vue3-cookies'
import { http } from './network/api'

const { cookies } = useCookies()

export const signin = async (email: string, password: string) => {
	return await http.post('/auth/signin', {
		email: email,
		password: password
	})
}

export const signup = async (username: string, email: string, password: string) => {
	return await http.post('/auth/signup', {
		username: username,
		email: email,
		password: password
	})
}

export const activate = async (token: string) => {
	return await http.post('auth/activate', {
		activationToken: token
	})
}

export const userInfos = async (token: string) => {
	return await http.get('auth/me', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}

export const requestPasswordReset = async (email: string) => {
	return await http.post('auth/ask-reset-password', {
		email: email
	})
}

export const passwordReset = async (password: string, confirmPassword: string, token: string) => {
	return await http.post(`auth/reset-password?token=${token}`, {
		password: password,
		confirmPassword: confirmPassword
	})
}

export const getMeInfos = async () => {
	return await http.get('auth/me', {
		headers: {
			Authorization: `Bearer ${cookies.get('token')}`
		}
	})
}
