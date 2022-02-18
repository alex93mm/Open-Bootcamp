import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const Contactstate = ({ contact }) => {

    const[conected, conect] = useState(contact.conected);

    const changeState = () => {
        conect(!conected);
    }

    return (
        <div>
            <h1>CONTACTO</h1>
            <h3>Nombre:{ contact.name }</h3>
            <h3>Apellido:{ contact.surname }</h3>
            <h3>Correo electronico: { contact.email }</h3>
            <h3>{ conected ? 'En linea' : 'Desconectado' }</h3>
            <button onClick={ changeState }>CONECTAR</button>
        </div>
    );
};

Contactstate.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default Contactstate;
