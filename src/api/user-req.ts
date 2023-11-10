import { useCookies } from 'vue3-cookies'
import { http } from './network/api'
const { cookies } = useCookies()

export const editProfile = async (username: string, email: string, bio: string, status: string) => {
	return await http.patch('/users/profile', {
		profile: {
			username: username,
			email: email,
			bio: bio,
			status: status
		}
	}, {
		headers: {
			Authorization: `Bearer ${cookies.get('token')}`
		}
	})
}