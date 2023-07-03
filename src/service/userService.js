import { UserModel } from '../models/index.js';
import { AplicationError } from '../utils/error.js';
import { constants } from 'http2';

export const UserService = {
    getUser: async ({name}) => {
        if (!name) {
            throw new AplicationError('El nombre no puede ser vacio', constants.HTTP_STATUS_BAD_REQUEST);
        }
        const user = await UserModel.findOne({name});
        if (!user) {
            return await UserModel({name}).save()
                .then(user => {
                    console.log('Usuario creado', name);
                    return user;
                });
        }
        return user;
    },
};
