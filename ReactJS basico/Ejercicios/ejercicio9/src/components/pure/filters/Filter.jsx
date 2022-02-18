import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import TaskContext from '../../../store/TaskContext';
import { SET_VISIBILITY_FILTER } from '../../../store/TaskActions';


function Filter({ filter, children }) {

    const [state, dispatch] = useContext(TaskContext);

    const onClickButton = (e) => {
        e.preventDefault();
        dispatch({
            type: SET_VISIBILITY_FILTER,
            payload: {
                filter: filter
            }
        });
    }

    if(state.filter === filter) {
        return (
            <button
                type='button'
                className='btn btn-primary'>
                { children }
            </button>
        )
    }

    return (
        <button
            onClick={ onClickButton }
            type='button'
            className='btn btn-secondary'>
            { children }
        </button>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Filter
