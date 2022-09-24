import TodoForm from "./components/TodoForm"
import './App.css';
import React, {useState} from "react";
import TodoList from "./components/todolist";


function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos([todo, todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo= {addTodo}/>
        <TodoList  todo={todos} />
      </header>
      jai shree ram
    </div>
  );
}

export default App;
