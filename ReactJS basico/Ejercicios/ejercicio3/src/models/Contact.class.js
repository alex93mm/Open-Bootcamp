export class Contact {
    name= "";
    surname = "";
    email = "";
    phone = "";
    conected = false;

    constructor( name, surname, email, phone ){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.conected = false;
    }
    
}