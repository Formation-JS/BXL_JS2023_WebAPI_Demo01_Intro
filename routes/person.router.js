import { Router } from 'express';
import personController from '../controllers/person.controller.js';

// Router pour les endpoints de "person"
const personRouter = Router();

// //? V1 - Routes individuelles
// personRouter.get('/', personController.getAll);
// personRouter.post('/', personController.add);
// personRouter.all('/', (req, res) => res.sendStatus(405));
//
// personRouter.get('/:id', personController.getById);
// personRouter.put('/:id', personController.update);
// personRouter.delete('/:id', personController.delete);
// personRouter.all('/:id', (req, res) => res.sendStatus(405));

//? V2 - Routes chainées avec un préfix
personRouter.route('/')
    .get(personController.getAll)
    .post(personController.add)
    .all((req, res) => res.sendStatus(405));

personRouter.route('/:id')
    .get(personController.getById)
    .put(personController.update)
    .delete(personController.delete)
    .all((req, res) => res.sendStatus(405));

export default personRouter;
