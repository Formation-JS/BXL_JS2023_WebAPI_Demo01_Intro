import express from 'express';
import personRouter from './person.router.js';

// Router principal de la Web API (Centralise tous les routers)
const mainRouter = express.Router();

// Ajoute des sous-router
mainRouter.use('/person', personRouter);

// Export du module 
export default mainRouter;