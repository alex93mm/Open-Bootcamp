import React, { useContext } from 'react';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED } from '../../store/Filters';
import { DELETE_TASK, TOOGLE_TASK } from '../../store/TaskActions';
import TaskContext from '../../store/TaskContext';
import Task from '../pure/Task';

const Tasklist = () => {

    const [state, dispatch] = useContext(TaskContext);

    const filterTasks = (tasks, filter) => {
        switch(filter){
            case FILTER_ALL:
                return tasks;
            case FILTER_ACTIVE:
                return tasks.filter((task) => !task.completed);
            case FILTER_COMPLETED:
                return tasks.filter((task) => task.completed);
            default:
                return tasks;
        }
    }

    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th colSpan='4'>TASK LIST</th>
                </tr>
            </thead>
            <tbody>
            {
                    
                    filterTasks(state.tasks, state.filter).map((task, index) => (
                        <Task
                            key={index}
                            id={task.id}
                            taskTitle={task.taskTitle}
                            completed={task.completed}
                            toogle={ () => {
                                dispatch({
                                    type: TOOGLE_TASK,
                                    payload: {
                                        id: task.id
                                    }
                                })
                            } }
                            remove={ () => {
                                dispatch({
                                    type: DELETE_TASK,
                                    payload: {
                                        id: task.id
                                    }
                                })
                            } }
                            >
                        </Task>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Tasklist;
