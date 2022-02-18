import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Todoform = ({ submit }) => {

    const todoText = useRef()

    const createNewTodo = (e) => {
        e.preventDefault();
        submit(todoText.current.value);
        todoText.current.value = '';
    }
    return (
        <div>
            <h2>Create TODOs</h2>
            <form
                onSubmit={ createNewTodo }>
                <input 
                    type='text' 
                    ref={todoText} 
                    placeholder='TODOs name'/>
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

Todoform.propTypes = {
    submit: PropTypes.func.isRequired
}

export default Todoform;
