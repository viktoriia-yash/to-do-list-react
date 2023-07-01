import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-container">
        <input
          type="text"
          placeholder="What is the task today?"
          value={value}
          className="todo-input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
