import { Routes, Route, Navigate } from "react-router-dom";

import Todos from './components/todos'
import TodoForm from './components/todos/form'
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Your Todos</h3>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="/todos/add" element={<TodoForm />} />
        <Route path="/todos/*" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
