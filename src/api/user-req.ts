import { http } from './network/api'

export const editProfile = async (id: string, username:string, email:string, bio:string, status:string) => {
    return await http.post('/users/profile', {
        id: id,
        username: username,
        email: email,
        bio: bio,
        status: status
    })
}