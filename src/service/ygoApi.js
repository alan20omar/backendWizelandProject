import axios from 'axios';
import { AplicationError } from '../utils/error.js';
import { constants } from 'http2';

const URL_YGO_API = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

export const YgoApi = {
    getCards: (params = {}) => {
        const options = {
            params,
            method: 'GET',
        }
        return axios(URL_YGO_API, options)
            .then(res => res.data)
            .catch(err => {
                throw new AplicationError(err.message, constants.HTTP_STATUS_NOT_FOUND);
            });
    },
};
