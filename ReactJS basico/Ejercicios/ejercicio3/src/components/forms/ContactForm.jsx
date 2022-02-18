import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';

function ContactForm( { add } ) {

    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');

    function addContact(e){
        e.preventDefault();
        
        const contact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            phoneRef.current.value
        );

        add(contact);
    }

    return (
        <form onSubmit={ addContact }>
            <div className='row'>
                <div className='col-3'>
                    <label for="inputName">Name</label>
                    <input ref={ nameRef } id='inputName' type='text' className='form-control' placeholder='Enter name'/>
                </div>
                <div className='col-3'>
                    <label for="inputSurname">Surname</label>
                    <input ref={ surnameRef } id='inputSurname' type='text' className='form-control' placeholder='Enter surname'/>
                </div>
                <div className='col-3'>
                    <label for="inputMail">Email</label>
                    <input ref={ emailRef } id='inputMail' type='email' className='form-control' placeholder='Enter email'/>
                </div>
                <div className='col-3'>
                    <label for="inputPhone">Phone</label>
                    <input ref={ phoneRef } id='inputPhone' type='tel' className='form-control' placeholder='Enter phone number'/>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-2'>
                    <button type='submit' className='btn btn-success m-3'>Add</button>
                </div>
            </div>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};

export default ContactForm;
