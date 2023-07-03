import { UserService } from '../service/index.js';
import { constants } from 'http2';

export const userController = { 
    /**
     * Get user controller
     * @param {import('express').Request} req Require express object
     * @param {import('express').Response} res Response express object
     * @param {import('express').NextFunction} next Callback function
     */
    getUser: async (req, res, next) => {
        try {
            const { query: { name } } = req;
            const options = {
                name,
            };
            console.log(name)
            const user = await UserService.getUser(options);
            res.status(constants.HTTP_STATUS_OK).json(user);
        } catch (error) {
            next(error);
        }
    },
};
