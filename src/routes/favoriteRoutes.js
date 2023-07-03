import express from "express";
import { favoriteController } from '../controllers/index.js';
/**
 * Rutas de about page
 * @param {import('express').express} app Aplicacion de express 
 */
export const favoriteRouter = (app) => {
    const router = express.Router();
    app.use('/favorite', router);
    router.get('/', favoriteController.getNotifi);
};
