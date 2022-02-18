import React from 'react';
import { Contact } from '../models/contact.class';
import Contactstate from './contactState';


const Contactlist = () => {

    const newContact = new Contact('Alejandro', 'Martinez','alejandro93mm@gmail.com', false);

    return (
        <div>
            <Contactstate contact={ newContact }></Contactstate>
        </div>
    );
};


export default Contactlist;
