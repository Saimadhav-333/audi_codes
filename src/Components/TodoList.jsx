import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addHandler = (newTask) => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, newTask]);
    setTask(""); // Clear input after adding a task
  };

  const removeHandler = (idx) => {
    const updatedTasks = tasks.filter((_, index) => index !== idx);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>
            {task}
            <button onClick={() => removeHandler(idx)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
                />
      <button onClick={() => addHandler(task)}>Add Todo</button>
    </div>
  );
};

export default ToDoList;