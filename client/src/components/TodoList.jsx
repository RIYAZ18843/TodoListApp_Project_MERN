// frontend/src/components/TodoList.js

import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className="todo-item">
          {todo.text}
          <button onClick={() => deleteTodo(todo._id)} className="todo-delete-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
