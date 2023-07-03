import { YgoApi } from '../service/index.js';
import { constants } from 'http2';

export const cardsController = { 
    /**
     * Get controllador
     * @param {import('express').Request} req Require express object
     * @param {import('express').Response} res Response express object
     * @param {import('express').NextFunction} next Callback function
     */
    getCard: async (req, res, next) => {
        try {
            const { query: { num, offset, race, type, fname } } = req;
            const options = {
                num,
                offset,
                race,
                type,
                fname: fname?.replace(' ', '%'),
            };
            const cards = await YgoApi.getCards(options);
            res.status(constants.HTTP_STATUS_OK).json(cards);
        } catch (error) {
            next(error);
        }
    }
};
