import React, { useContext, useRef } from 'react'
import TaskContext from '../../../store/TaskContext';
import { ADD_TASK } from '../../../store/TaskActions';

let taskId = 1;

function TaskForm() {
  
    const taskTitle = useRef();

    const [state, dispatch] = useContext(TaskContext);

    const createTask = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_TASK,
            payload: {
                id: taskId++,
                taskTitle: taskTitle.current.value
            }
        });
        taskTitle.current.value = '';
    }

  return (
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
  )
}

export default TaskForm
