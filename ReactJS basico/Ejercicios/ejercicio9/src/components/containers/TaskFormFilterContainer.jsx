import Filteroptions from '../pure/filters/FilterOptions'
import TaskForm from '../pure/forms/TaskForm'

function TaskFormFilterContainer() {
    
  return (
    <div className='row'>
        <div className='card col m-2'>
            <div className='card-body'>
                <h6 className='card-title'>CREATE NEW TASK</h6>
                <TaskForm></TaskForm>
            </div>
        </div>
        <div className='card col m-2'>
            <div className='card-body'>
                <h6 className='card-title'>FILTERS</h6>
                <Filteroptions></Filteroptions>
            </div>
        </div>
    </div>
  )
}

export default TaskFormFilterContainer