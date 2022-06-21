import { NavLink, Routes, Route } from 'react-router-dom'

import { useTodos } from 'App/store/selectors'
import Todo from './todo'
import TodoPage from "../todo"
import { Fab, TodosContainer, TodosTodoContainer } from './components'

export default function Todos() {
  const todos = useTodos()

  return (
    <div>
      <TodosTodoContainer>
        <TodosContainer>
          {
            todos?.map((todo, index) => {
              const reactKey = `todo-list-item-${index}: ${todo.title}`
              return (
                <Todo todo={{ ...todo, id: index }} key={reactKey} />
              )
            })
          }
        </TodosContainer>
        <div>
          <Routes>
            <Route path=":id" element={<TodoPage />} />
          </Routes>
        </div>
      </TodosTodoContainer>
      <NavLink to="/todos/add">
        <Fab>
          +
        </Fab>
      </NavLink>
    </div>
  )
}
