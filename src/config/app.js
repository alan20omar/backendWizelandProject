import express from "express";
import cors from 'cors';

import { cardsRoute } from '../routes/index.js';
import { dbConnection, handlerError } from '../middlewares/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(dbConnection);

cardsRoute(app)

app.use(handlerError);

export default app;
