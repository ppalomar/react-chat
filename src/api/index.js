import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

export const subscribeToMessages = cb => socket.on('chat message', msg => cb(msg));
export const sendMessage = msg => socket.emit('chat message', msg);

export const subscribeToDeleteMessages = cb => socket.on('delete message', msgId => cb(msgId));
export const deleteMessage = msgId => socket.emit('delete message', msgId);
