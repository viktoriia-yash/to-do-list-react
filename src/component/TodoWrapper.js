import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuid4 } from "uuid";
uuid4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuid4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  return (
    <div className="todo-wrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoWrapper;
