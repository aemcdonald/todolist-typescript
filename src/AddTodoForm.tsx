import React from 'react';

export const AddTodoForm: React.FC = props => {
  return (
    <form>
      <input type='text' />
      <button type='submit'>Add Todo</button>
    </form>
  );
};
