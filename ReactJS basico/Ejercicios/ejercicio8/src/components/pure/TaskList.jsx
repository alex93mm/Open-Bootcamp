import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

function TaskList({ tasks, onToogleClick, onRemoveClick }) {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th colSpan='2'>TASK LIST</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task, index) => (
                        <Task
                            key={index}
                            {...task}
                            toogle={ () => {onToogleClick(task.id)} }
                            remove={ () => {onRemoveClick(task.id)} }
                            >
                        </Task>
                    ))
                }
            </tbody>
        </table>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                taskTitle: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onToogleClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
}

export default TaskList
