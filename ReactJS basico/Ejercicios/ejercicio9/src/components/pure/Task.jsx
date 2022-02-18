import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ toogle, remove, completed, taskTitle, id }) => {

    const iconCompleted = () => {
        return completed ? (<i className="bi bi-check-square"></i>) : (<i className="bi bi-square"></i>);
    }

    const removeTask = () => {
        remove();
    }

    const toogleTask = () => {
        toogle();
    }

    const styledRow = () => {
        let style = {};
        
        completed 
        ?
        style = {
            backgroundColor: 'lightgreen',
            color: 'white',
            textDecoration: 'line-through'
        }
        : 
        style = {
            backgroundColor: 'orange'
        }

        return style;
    }

    return (
        <tr style={styledRow()}>
            <th>{id}</th>
            <td>{taskTitle}</td>
            <td
                onClick={toogleTask}>
                {iconCompleted()}
            </td>
            <td
                onClick={removeTask}>
                <i className="bi bi-trash3"></i>
            </td>
        </tr>
    )
}

Task.propTypes = {
    toogle: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    taskTitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Task;
