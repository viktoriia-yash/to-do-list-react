import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update Task"
        value={value}
        className="update-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="update-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
