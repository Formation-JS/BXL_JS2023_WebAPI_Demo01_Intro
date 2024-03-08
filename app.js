'use strict';

//! Imports
import 'dotenv/config'

import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import chalk from 'chalk';
import mainRouter from './routes/index.js';

//! Variable d'environnment
const { NODE_ENV, PORT } = process.env;

//! Serveur Web API
//* Initialisation
const app = express();

//* Middlewares
app.use(morgan('tiny'));
app.use(express.json());

//* Routing
app.use(mainRouter);

//* Start
app.listen(PORT, () => {
    console.log(chalk.greenBright(`Web API running on port ${PORT} (${NODE_ENV})`));
})
