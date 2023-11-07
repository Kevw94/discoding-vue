import { http } from './network/api'

export const signin = async (email: string, password: string) => {
    return await http.post('/auth/signin', {
		email: email,
		password: password
	});
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
		token: token
	})
}

export const userInfos = async (token: string) => {
	return await http.get('auth/me', {
	  	headers: {
			'Authorization': `Bearer ${token}`
	  	}
	});
}