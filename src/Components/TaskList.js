import React from "react";

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => completeTask(index)}>
            {task.completed ? "Incomplete" : "Complete"}
          </button>
          <br />
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
