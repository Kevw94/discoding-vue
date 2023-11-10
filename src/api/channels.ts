import { http } from "./network/api"

export const getServerChannels = async (token: string, serverId:string) => {
  return await http.get(`/channels/${serverId}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
};

export const getAllChannels = async (token: string) => {
  return await http.get(`/channels`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
};

