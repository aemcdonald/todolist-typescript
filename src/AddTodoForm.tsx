import React, { useState } from 'react';

export const AddTodoForm: React.FC = props => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = event => {
    setNewTodo(event.target.value);
  };
  return (
    <form>
      <input type='text' value={newTodo} onChange={handleChange} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};
