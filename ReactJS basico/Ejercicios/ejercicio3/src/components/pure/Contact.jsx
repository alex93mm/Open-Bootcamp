import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';

const ContactComponent = ( { contact, conect, remove, index } ) => {

    useEffect(() => {
        console.log('New contact');
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`);
        };
    }, [contact]);

    function isConected(){
        return contact.conected ? 
            (<i class="bi bi-circle-fill text-success"></i>) 
            : 
            (<i class="bi bi-circle-fill text-danger"></i>);
    }

    // Function to render a button based on the contact state (Conect or disconect)
    function btnConect(){
        return contact.conected ?
        (<button className='btn btn-outline-danger btn-sm' onClick={ () => conect(contact) }>Logout</button>)
        :
        (<button className='btn btn-outline-success btn-sm' onClick={ () => conect(contact) }>Log in</button>)
    }

    return (
        <tr className='fw-normal'>
            <td>
                <span className='ms-2'> 
                    { index + 1 }
                </span> 
            </td>
            <th>
                <span className='align-middle'> 
                    { contact.name + " " + contact.surname }
                </span> 
            </th>
            <td className='align-middle'>
                <span className=''> 
                    { contact.email } 
                </span> 
            </td>
            <td className='align-middle'>
                <span className=''>
                    { contact.phone } 
                </span>
            </td>
            <td className='align-middle'>
                <span className=''>
                    { isConected() } 
                </span>
            </td>
            <td className='align-middle'>
                <span className=''>
                    { btnConect() }
                </span>
            </td>
            <td className='align-middle'>
                <span className=''>
                    <i class="bi bi-x-circle text-danger" onClick={ () => remove(contact) }></i>
                </span>
            </td>
        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    conect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent;
