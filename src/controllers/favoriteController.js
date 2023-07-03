import { FavoriteService } from '../service/index.js';
import { constants } from 'http2';

export const favoriteController = { 
    /**
     * notifi controllador
     * @param {import('express').Request} req Require express object
     * @param {import('express').Response} res Response express object
     * @param {import('express').NextFunction} next Callback function
     */
    getNotifi: async (req, res, next) => {
        try {
            const { query: { name, likedUser } } = req;
            const options = {
                name,
                likedUser,
            };
            await FavoriteService.notiFavorite(options);
            res.status(constants.HTTP_STATUS_OK).json({});
        } catch (error) {
            next(error);
        }
    }
};
