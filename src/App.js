import React, { useState, useEffect } from 'react'
import './styles/App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const LOCAL_STORAGE_KEY_TODOS = 'todoApp.todos';

  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1>Today's Tasks</h1>
      <div className="content">
        <AddTodo todos={ todos } setTodos={ setTodos } />
        <TodoList todos={ todos } setTodos={ setTodos } completedTodos={ completedTodos } setCompletedTodos={ setCompletedTodos } />
      </div>
    </div>
  );
};

export default App;