import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task today?"
        className="todo-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
