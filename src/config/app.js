import express from "express";
import cors from 'cors';
import { fileURLToPath } from 'url';

import { cardsRouter, deckRouter, userRouter } from '../routes/index.js';
import { dbConnection, handlerError } from '../middlewares/index.js';

import path from 'path';

const app = express();


app.use(cors());
app.use(express.json());
// Public files
app.use(express.static(path.join(fileURLToPath(import.meta.url).split('config/')[0], 'public')));
// DB
app.use(dbConnection);
// Routes
cardsRouter(app)
userRouter(app)
deckRouter(app)

app.use(handlerError);

export default app;
