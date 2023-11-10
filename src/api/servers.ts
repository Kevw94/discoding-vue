import { http } from './network/api'

export const getUserServers = async (token: string) => {
	return await http.get('/servers', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
