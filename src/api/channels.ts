import { http } from "./network/api"

export const getServerChannels = async (token: string, serverId:string) => {
  return await http.get(`/channels/${serverId}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
};
