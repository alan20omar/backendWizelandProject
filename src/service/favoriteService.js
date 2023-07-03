import io from '../config/socket.js';

export const FavoriteService = {
    notiFavorite: ({name, likedUser}) => {
        console.log({
            msg: `A ${name} le ha gustado tu deck`,
            likedUser
        })
        return io.to(`room_${likedUser}`).emit('message',{
            msg: `A ${name} le ha gustado tu deck`,
        })
    }
};
