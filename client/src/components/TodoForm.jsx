// frontend/src/components/TodoForm.js

import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;

    try {
      const response = await axios.post('http://localhost:5000/api/todos', { text });
      addTodo(response.data);
      setText('');
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
