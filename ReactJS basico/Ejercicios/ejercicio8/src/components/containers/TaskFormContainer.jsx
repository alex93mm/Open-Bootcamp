import { connect } from 'react-redux'
import { addTask } from '../../store/actions/actions'
import TaskForm from '../pure/forms/TaskForm'

const mapStateToProps = (state) => ({
    // Empty state
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (taskTitle) => {
            dispatch(addTask(taskTitle));
        }
    }
}

const TaskFormContainer = connect(mapStateToProps, mapDispatchToProps)(TaskForm);

export default TaskFormContainer;