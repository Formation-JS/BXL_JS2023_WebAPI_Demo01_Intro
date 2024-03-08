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
        res.sendStatus(501);
    },

    delete: async (req, res) => {
        res.sendStatus(501);
    }
};

export default personController;