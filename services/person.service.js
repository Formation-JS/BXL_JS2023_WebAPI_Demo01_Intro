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
        return fakeData.people;
    },

    getById: async (id) => {
        const person = fakeData.people.find(p => p.personId === id);
        return person;
    }

};

export default personService;