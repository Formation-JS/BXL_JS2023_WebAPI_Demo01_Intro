'use strict';

//! Imports
import 'dotenv/config'

import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import chalk from 'chalk';

//! Variable d'environnment
const { NODE_ENV, PORT } = process.env;

//! Serveur Web API
//* Initialisation
const app = express();

//* Middlewares
app.use(morgan('tiny'));

//* Routing
app.get('/', (req, res) => {
    res.json('Hello World');
});

//* Start
app.listen(PORT, () => {
    console.log(chalk.greenBright(`Web API running on port ${PORT} (${NODE_ENV})`));
})