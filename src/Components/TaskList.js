import React from "react";
import DeleteIcon from "../Images/delete.svg"

const TaskList = ({ tasks = [{ title: "", description: "", completed: false }], completeTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <div className=" p-6 bg-white border flex justify-between border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => completeTask(index)}
            >
              {task.completed ? "Incomplete" : "Complete"}
            </button>
            <br />
            <img
              className="cursor-pointer	" alt="deleteIcon"
              src={DeleteIcon}
              onClick={() => deleteTask(index)}
            />

          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
