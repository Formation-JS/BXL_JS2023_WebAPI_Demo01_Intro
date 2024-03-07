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
        }
    ],
    nextId: 2
}

const personService = {

    getAll: async () => {
        return fakeData.people;
    },

    getById: async (id) => {
        const person = fakeData.people.find(p => p.personId === id);
        return person;
    }

};

export default personService;