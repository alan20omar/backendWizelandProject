import { DeckService } from '../service/index.js';
import { constants } from 'http2';

export const deckController = { 
    /**
     * Get All decks controller
     * @param {import('express').Request} req Require express object
     * @param {import('express').Response} res Response express object
     * @param {import('express').NextFunction} next Callback function
     */
    getAllDecks: async (req, res, next) => {
        try {
            const decks = await DeckService.getAllDecks();
            res.status(constants.HTTP_STATUS_OK).json(decks);
        } catch (error) {
            next(error);
        }
    },
    /**
     * Get one deck controllador
     * @param {import('express').Request} req Require express object
     * @param {import('express').Response} res Response express object
     * @param {import('express').NextFunction} next Callback function
     */
    getDeck: async (req, res, next) => {
        try {
            const { query: { userId, deckId } } = req;
            const options = {
                userId,
                _id: deckId
            };
            const deck = await DeckService.getUserDeck(options);
            res.status(constants.HTTP_STATUS_OK).json(deck);
        } catch (error) {
            next(error);
        }
    },
    /**
     * Post addCardToDeck controllador
     * @param {import('express').Request} req Require express object
     * @param {import('express').Response} res Response express object
     * @param {import('express').NextFunction} next Callback function
     */
    postAddCardToDeck: async (req, res, next) => {
        try {
            const { body: { userId, deckId, cartaId } } = req;
            const options = {
                _id: deckId,
                userId,
                cartaId,
            };
            const deck = await DeckService.addCardToDeck(options);
            res.status(constants.HTTP_STATUS_OK).json(deck);
        } catch (error) {
            next(error);
        }
    },
    /**
     * Delete removeCardOfDeck controllador
     * @param {import('express').Request} req Require express object
     * @param {import('express').Response} res Response express object
     * @param {import('express').NextFunction} next Callback function
     */
    deleteAddCardToDeck: async (req, res, next) => {
        try {
            const { query: { userId, deckId, cartaId } } = req;
            const options = {
                _id: deckId,
                userId,
                cartaId,
            };
            const deck = await DeckService.removeCardOfDeck(options);
            res.status(constants.HTTP_STATUS_OK).json(deck);
        } catch (error) {
            next(error);
        }
    },
};
