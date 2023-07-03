import { connect } from 'mongoose';
import config from '../config/env.js';
/**
 * Manejador de errores
 * @param {import('express').Request} req Require express object
 * @param {import('express').Response} res Response express object
 * @param {import('express').NextFunction} next Callback function
 */
export const dbConnection = async (req, res, next) => {
    try {
        await connect(config.dbConnectionString);
        console.log('[dbConnection] connect');
        next();
    } catch (err) {
        next(err);
    }
};
