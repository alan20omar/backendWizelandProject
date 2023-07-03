import { Server } from "socket.io";

const io = new Server({
    cors: {origin : '*'},
});
io.on("connection", (socket) => {
    const id_handshake = socket.id;
    const {userId} = socket.handshake.query;
    socket.join(`room_${userId}`);
    console.log('[socket] Coneccion:',`${id_handshake} en room_${userId}`);
    socket.emit('message', {
        msg: 'Bienvenido. Estas conectado a las notificaciones!',
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
export default io;
