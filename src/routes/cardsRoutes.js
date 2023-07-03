import express from "express";
import { cardsController } from '../controllers/index.js';
/**
 * Rutas de about page
 * @param {import('express').express} app Aplicacion de express 
 */
export const cardsRouter = (app) => {
    const router = express.Router();
    app.use('/card', router);
    router.get('/', cardsController.getCard);
};
