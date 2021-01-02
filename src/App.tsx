import React, { useState } from 'react';
import { TodoListItem } from './TodoListItem';

const initialTodos: Array<Todo> = [
  { text: 'Do laundry', complete: false },
  { text: 'Grocery list', complete: true }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)
  return (<>
    <TodoListItem todo={todos[0]}/>
  </>)
};

export default App;
