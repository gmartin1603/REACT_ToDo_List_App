import React, { useState } from 'react';
import './App.css';
import './Todo.css';
import Todo from './Todo'


const App = () => {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <div className="main">
          <h1>ToDo List</h1>

          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button disabled={!input} type="submit" onClick={handleSubmit}>+</button>
          </form>
      <div className="todo-container">
            {todos.map((todo) => (
              <Todo title={todo} description={todo.description}/>
              ))}
      </div>
      </div>
    </div>
  );
}

export default App;
