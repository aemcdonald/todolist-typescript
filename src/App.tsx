import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos = [
  { text: 'Do laundry', complete: false },
  { text: 'Grocery list', complete: true }
];

const App: React.FC = () => {
  return <TodoListItem />;
};

export default App;
