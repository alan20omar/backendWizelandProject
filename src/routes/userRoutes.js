import express from "express";
import { userController } from '../controllers/index.js';
/**
 * Rutas de about page
 * @param {import('express').express} app Aplicacion de express
 */
export const userRouter = (app) => {
    const router = express.Router();
    app.use('/user', router);
    router.get('/', userController.getUser);
};
