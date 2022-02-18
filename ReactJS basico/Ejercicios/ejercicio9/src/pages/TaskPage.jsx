import React, { useReducer } from 'react';
import TaskFormFilterContainer from '../components/containers/TaskFormFilterContainer';
import Tasklist from '../components/containers/TaskList';
import { FILTER_ALL } from '../store/Filters';
import TaskContext from '../store/TaskContext';
import { taskReducer } from '../store/TaskReducer';

const Taskpage = () => {

    const TaskInitialState = {
        filter: FILTER_ALL,
        tasks: []
    };

    const store = useReducer(taskReducer, TaskInitialState)

    return (
        <TaskContext.Provider value={store}>
            <Tasklist/>
            <TaskFormFilterContainer/>
        </TaskContext.Provider>
    );
}

export default Taskpage;
