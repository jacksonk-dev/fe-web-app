import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import Todos from './components/todos'
import TodoPage from "./components/todo"
import TodoForm from './components/todo/form'
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="Header-Text" to="/"><h3>Your Todos</h3></NavLink>
      </header>
      <div className="Content-Container">
        <Routes>
          <Route path="/" element={<Navigate to="/todos" />} />
          <Route path="/todos/:id" element={<TodoPage />} />
          <Route path="/todos/add" element={<TodoForm />} />
          <Route path="/todos/edit/:id" element={<TodoForm />} />
          <Route path="/todos/*" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
