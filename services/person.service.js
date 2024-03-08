import { PersonDetailDTO, PersonListDTO } from '../dto/person.dto.js';

// Fake Data -> Object JS (Permet de stocker les données en mémoire)
const fakeData = {
    people: [
        {
            personId: 1,
            email: 'della.duck@digitalcity.brussels',
            firstname: 'Della',
            lastname: 'Duck',
            confirm: true,
            nbGuest: 4
        },
        {
            personId: 2,
            email: 'balthazar.picsou@digitalcity.brussels',
            firstname: 'Balthazar',
            lastname: 'Picsou',
            confirm: false,
            nbGuest: null
        },
        {
            personId: 4,
            email: 'miss.tick@digitalcity.brussels',
            firstname: 'Miss Tick',
            lastname: 'De Sortilege',
            confirm: true,
            nbGuest: 1
        }
    ],
    nextId: 5
}

const personService = {

    getAll: async () => {
        return fakeData.people.map(p => new PersonListDTO(p));
    },

    getById: async (id) => {
        const person = fakeData.people.find(p => p.personId === id);
        return new PersonDetailDTO(person);
    },

    add: async (person) =>  {
        // Ajout de la personne dans le "Fake Data"
        const personAdded = {
            ...person,
            personId: fakeData.nextId,
        };
        fakeData.people.push(personAdded)

        // Incrementation de l'id
        fakeData.nextId++ ;

        // Envoi de la personne ajouter dans les données
        return new PersonDetailDTO(personAdded);
    }

};

export default personService;