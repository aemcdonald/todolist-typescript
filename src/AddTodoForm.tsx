import React, { useState } from 'react';

export const AddTodoForm: React.FC = props => {
  const [newTodo, setNewTodo] = useState('');
  return (
    <form>
      <input type='text' value={newTodo} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};
