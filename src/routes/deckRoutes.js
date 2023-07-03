import express from "express";
import { deckController } from '../controllers/index.js';
/**
 * Rutas de about page
 * @param {import('express').express} app Aplicacion de express 
 */
export const deckRouter = (app) => {
    const router = express.Router();
    app.use('/deck', router);
    router.get('/', deckController.getAllDecks);
    router.get('/user', deckController.getDeck);
    router.post('/card', deckController.postAddCardToDeck);
    router.delete('/card', deckController.deleteAddCardToDeck);
};
