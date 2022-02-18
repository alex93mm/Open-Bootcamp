import { connect } from 'react-redux'
import { removeTask, toogleTask } from '../../store/actions/actions';
import TaskList from '../pure/TaskList';

const filterTasks = (tasks, filter) => {
    switch(filter){
        case 'SHOW_ALL':
            return tasks;
        case 'SHOW_ACTIVE':
            return tasks.filter((task) => !task.completed);
        case 'SHOW_COMPLETED':
            return tasks.filter((task) => task.completed);
        default:
            return tasks;
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: filterTasks(state.tasksState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToogleClick: (id) => {
            dispatch(toogleTask(id));
        },
        onRemoveClick: (id) => {
            dispatch(removeTask(id));
        }
    }
}

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskContainer;