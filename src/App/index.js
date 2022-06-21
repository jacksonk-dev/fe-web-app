import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import Todos from './components/todos'
import TodoForm from './components/todo/form'
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="headerText" to="/"><h3>Your Todos</h3></NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="/todos/add" element={<TodoForm />} />
        <Route path="/todos/edit/:id" element={<TodoForm />} />
        <Route path="/todos/*" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
