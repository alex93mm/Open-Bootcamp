import React, { useState, useEffect } from 'react';
import { Contact } from '../../models/Contact.class';
import ContactForm from '../forms/ContactForm';
import ContactComponent from '../pure/Contact';

const Contactlist = () => {

    // Contacts for contact list

    const contact1 =  new Contact("Alejandro", "Martinez", "alejandro93mm@gmail.com", "645565464");
    const contact2 =  new Contact("Silvia", "Rufete", "silviarufete@gmail.com", "619212282");
    const contact3 =  new Contact("Magic", "Jhonson", "mayitabonita@gmail.com", "675849302");
    const contact4 =  new Contact("AbbyChuela", "Nigru", "abbyteckelera@gmail.com", "611299999");
    const contact5 =  new Contact("La", "bala", "skoda@gmail.com", "678445223");
    const contact6 =  new Contact("Eltio", "Rufus", "peugeot@gmail.com", "665312389");

    const [contacts, setContacts] = useState([contact1, contact2, contact3, contact4, contact5, contact6]);

    useEffect(() => {
        console.log('Contact state modified');
        return () => {
            console.log('ContactList is going to unmount');
        };
    }, [contacts]);

    // Function for conect or disconect a contact.
    function conectContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    // Function to remove a contact
    function deleteContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function openModalAddContact(){
        // TODO: Open modal form to add Contact
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1>CONTACT LIST</h1>
            </div>
            <div className='row'> 
                <div className='col-12'>
                    <table className='table table-hover text-center'>
                        <thead>
                            <tr>
                                <th scope='col'></th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Mail</th>
                                <th scope='col'>Phone</th>
                                <th scope='col'>Conected</th>
                                <th scope='col'></th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts.map(( contact, index) => {
                                return(
                                <ContactComponent 
                                    key= { index }
                                    index= { index }
                                    contact= { contact } 
                                    conect= { conectContact }
                                    remove= { deleteContact }>
                                </ContactComponent>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row'>
                <h1>ADD CONTACT</h1>
            </div>
            <div className='row'> 
                <div className='col-12'>
                    <ContactForm 
                        add= { addContact }>
                    </ContactForm>
                </div>
            </div>
        </div>
        
    );
}

export default Contactlist;
