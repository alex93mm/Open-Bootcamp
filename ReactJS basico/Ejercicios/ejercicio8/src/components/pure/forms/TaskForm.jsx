import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Filteroptions from '../filter/FilterOptions';

function TaskForm({ submit }) {

    const taskTitle = useRef();

    const createTask = (e) => {
        e.preventDefault();
        submit(taskTitle.current.value);
        taskTitle.current.value = '';
    }

  return (
    <div className='row'>
        <div className='card col m-2'>
            <div className='card-body'>
                <h6 className='card-title'>CREATE NEW TASK</h6>
                <form onSubmit={ createTask }>
                    <div className='form-row mb-2'>
                        <label htmlFor='taskTitle'>Task title</label>
                        <input 
                            className='form-control'
                            name='taskTitle'
                            id='taskTitle'
                            type='text' 
                            ref={ taskTitle }
                            placeholder='Title'/>
                    </div>
                    <div className='form-row'>
                        <input className="btn btn-primary" type="submit" value="Create" />
                    </div>
                </form>
            </div>
        </div>
        <div className='card col m-2'>
            <div className='card-body'>
                <div className='card-title'>
                    <h6>FILTERS</h6>
                </div>
                <Filteroptions></Filteroptions>
            </div>
        </div>
    </div>
  )
}

TaskForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TaskForm
