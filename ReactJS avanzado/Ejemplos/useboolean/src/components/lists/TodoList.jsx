import React, { useState } from "react";
import useList from "../../hooks/useList";

const Todolist = () => {
  const tasks = useList([]);

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    setNewTask("");
  };
  //TODO: Change handle input for useRef
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
          <input value={newTask} onChange={handleInputChange} placeholder='New Task' type='text'/>
          <button type="submit">Create Task</button>
      </form>
      {tasks.isEmpty() ? 
        (<p>Task list is empty</p>)
        : 
        (
            <ul>
                {tasks.value.map((task, index) => {
                    return (
                        <li key={index}>
                            <input 
                                type="checkbox"
                                onClick={() => tasks.remove(index)}
                                checked={false}
                                />
                            {task}
                        </li>
                    )
                })}
            </ul>
        )
      }
    </div>
  );
};

export default Todolist;
