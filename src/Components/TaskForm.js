import React, { useState } from "react";

const TaskForm = ({ addTask, setShowModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && description.trim() !== "") {
      addTask({ title, description, completed: false });
      setTitle("");
      setDescription("");
      setShowModal(false)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <>
        <label
          htmlFor="Description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          required
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          defaultValue={""}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

      </>

      <button
        onClick={() => { setShowModal(false) }}
        type="button"
        className="text-white mr-4 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium mt-4 rounded-md  text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Cancel
      </button>
      <button
        onClick={() => { setShowModal(false) }}
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium mt-4 rounded-md  text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Save
      </button>
    </form>
  );
};

export default TaskForm;
