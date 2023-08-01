// import React, { useState } from "react";
// import TaskForm from "./Components/TaskForm";
// import TaskList from "./Components/TaskList";
// import "./App.css";
// import UserList from "./UserList";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SideBar from "./Components/SideBar";
import Layout from "./Layout"
import Tasks from "./Components/Tasks"

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const completeTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container justify-center text-center w-100vh h-100% bg-slate-200 my-8">
//       <h1>Task Management System</h1>
//       <TaskForm addTask={addTask} />
//       <TaskList
//         tasks={tasks}
//         completeTask={completeTask}
//         deleteTask={deleteTask}
//       />
//       <UserList />
//     </div>
//   );
// };



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="tasks" element={<Tasks />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App
