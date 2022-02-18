import React from 'react'
import PropTypes from 'prop-types'

function Filter({ active, onClick, children }) {

    const onClickButton = (e) => {
        e.preventDefault();
        onClick();
    }

    if(active) {
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
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Filter
