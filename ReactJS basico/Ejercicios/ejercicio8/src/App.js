import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TaskContainer from './components/containers/TaskContainer';
import TaskFormContainer from './components/containers/TaskFormContainer';

function App() {
  return (
    <div className="container">
        <TaskContainer></TaskContainer>
        <TaskFormContainer></TaskFormContainer>
    </div>
  );
}

export default App;
