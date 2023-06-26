import { constants } from 'http2';
/**
 * Manejador de errores
 * @param {Error} error function error
 * @param {import('express').Request} req Require express object
 * @param {import('express').Response} res Response express object
 * @param {import('express').NextFunction} next Callback function
 */
export const handlerError = (error, req, res, next) => {
    console.log('Ocurrio un error', error.message);
    res.status(error.status || constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).json({
        error: error.message || 'Ocurrio un error inesperado.',
    });
};
