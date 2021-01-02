import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Array<Todo> = [
  { text: 'Do laundry', complete: false },
  { text: 'Grocery list', complete: true }
];

const App: React.FC = () => {
  return (<>
    <TodoListItem todo={todos[0]}/>
  </>)
};

export default App;
