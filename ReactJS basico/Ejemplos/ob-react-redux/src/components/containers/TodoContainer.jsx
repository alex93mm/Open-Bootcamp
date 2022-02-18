import { connect } from 'react-redux'
import Todolist from '../pure/TodoList'

//Actions ref
import { toggleTodo } from '../../store/actions/actions'

// Function that filter TODOs for a todoList
const filterTodos = (todos, filter) => {
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default: 
            return todos;
    }
}

// Props that are reference to state
const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

// Props that are reference to an action function
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todolist)

export default TodoContainer;