
// Le dto pour les éléments "person" dans une liste
export class PersonListDTO {
    
    constructor({personId, firstname, lastname, confirm}) {
        this.personId = personId;
        this.name = firstname + ' ' + lastname;
        this.confirm = confirm;
    }
}

// Le dto pour les éléments "person" complet
export class PersonDetailDTO {
    
    constructor({personId, email, firstname, lastname, confirm, nbGuest}) {
        this.personId = personId;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.confirm = confirm;
        this.nbGuest = nbGuest;
    }
}