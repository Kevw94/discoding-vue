import { manager } from '@/api/network/socket.io';
import { Socket } from 'socket.io-client';

function handleSocketEvents(socket: Socket) {

	socket.on('peer-connected', (email) => {
		console.log("azeaezaz");
	});

	socket.on('new-friend', (email) => {
		console.log("New Friend");
	});
}

export const socketNotifications: { socket: Socket } = {
	socket: {} as Socket,
};

export function useSocket(roomId: string) {
	socketNotifications.socket = manager.socket('/');
	socketNotifications.socket.auth = { roomId: roomId };
	socketNotifications.socket.connect();

	handleSocketEvents(socketNotifications.socket);

	return {
		socket: socketNotifications.socket,
	};
}
