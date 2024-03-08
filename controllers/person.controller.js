import personService from '../services/person.service.js';
import { personValidator } from '../validators/person.validator.js';

const personController = {

    getAll: async (req, res) => {
        
        // Récuperation des données via le service
        const data = await personService.getAll();
        
        // Envoi de la réponse
        //? Envoi d'un JSON "à la main"
        /*
        res.status(200)
           .header({'Content-Type': 'Application/JSON'})
           .end(JSON.stringify(data));
        */

        //? Méthode .json d'express
        res.status(200).json(data);
    },

    getById: async (req, res) => {
        console.log(req);
        const id = parseInt(req.params.id);
        const data = await personService.getById(id);

        if(!data) {
            res.sendStatus(404);
            return;
        }

        res.status(200).json(data);
    },

    add: async (req, res) => {
        // Récuperation des données à ajouter depuis le body de la requete
        const personToAdd = req.body;
        
        // Validation des données
        let data;
        try {
            data = await personValidator.validate(personToAdd);
        }
        catch(error) {
            res.status(422)
               .json({
                    errorMessage: 'Les données sont invalides !'
               });
            return;
        }

        // Appeler le service pour appliqué les regles business (Add to FakeData)
        const personAdded = await personService.add(data);
        
        // Reponse de la requete (Created)
        res.status(201)
           .location(`/person/${personAdded.personId}`)
           .json(personAdded);
    },

    update: async (req, res) => {
        // Récuperer l'id de l'élémént et les données du body
        const personId = parseInt(req.params.id);
        const personToUpdate = req.body;

        // Test si l'element existe
        // - Le mot clef "await" attend la resolution de la promesse
        // - L'operateur "!" force un context boolean (thruty / falsy)
        // - Si l'opérateur "!" est placé après le "await",
        //   celui-ci affect la promesse et non le resultat de la promesse 
        const personExists = await personService.getById(personId)
        if(!personExists) {
            res.sendStatus(404);
            return;
        }

        // Validation des données
        let data;
        try {
            data = await personValidator.validate(personToUpdate);
        }
        catch {
            res.status(422)
               .json({
                    errorMessage: 'Les données sont invalides !' 
               });
            return;
        }

        // Traitement -> La mise à jour des données via le service
        const isUpdated = await personService.update(personId, data);

        if(!isUpdated) {
            res.status(400)
               .json({
                    errorMessage : 'Une erreur s\'est produite.'
               });
        }

        // Reponse de la requete (No Content)
        res.sendStatus(204);
    },

    delete: async (req, res) => {
        // Récuperation de l'id
        const personId = parseInt(req.params.id);

        const personExists = await personService.getById(personId);
        if(!personExists) {
            res.sendStatus(404);
            return;
        }

        const isDeleted = await personService.delete(personId);
        if(!isDeleted) {
            res.sendStatus(400);
            return;
        }
        res.sendStatus(204);
    }
};

export default personController;