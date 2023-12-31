import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuid4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
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

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todo-wrapper">
      <h2>What you're going</h2>
      <h2>to do today?</h2>
      <p className="github-link">
        <a
          href="https://github.com/viktoriia-yash/to-do-list-react"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source code
        </a>{" "}
        by Viktoriia Yashkina
      </p>
      <div>
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="tasks-container">
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
