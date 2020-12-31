import React from 'react';
import { TodoListItem } from './TodoListItem';

type Todo = {
  text: string,
  complete: boolean;
}

const todos = [
  { text: 'Do laundry', complete: false },
  { text: 'Grocery list', complete: true }
];

const App: React.FC = () => {
  return <TodoListItem />;
};

export default App;
