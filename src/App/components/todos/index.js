import { NavLink, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import { useTodos } from 'App/store/selectors'
import Todo from './todo'
import TodoPage from "../todo"

const Fab = styled.button`
  position: fixed;
  bottom: 8px;
  right: 8px;
  font-size: 32px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`
export default function Todos() {
  const todos = useTodos()

  return (
    <div>
      <div>
        <div>
          {
            todos?.map((todo, index) => {
              const reactKey = `todo-list-item-${index}: ${todo.title}`
              return (
                <Todo todo={{ ...todo, id: index }} key={reactKey} />
              )
            })
          }
        </div>
        <div>
          <Routes>
            <Route path=":id" element={<TodoPage />} />
          </Routes>
        </div>
      </div>
      <NavLink to="/todos/add">
        <Fab>
          +
        </Fab>
      </NavLink>
    </div>
  )
}
