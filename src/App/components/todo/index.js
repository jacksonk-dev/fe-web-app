import { useParams } from 'react-router-dom'

import { useTodo } from 'App/store/selectors'
import { EditLink } from './components'

export default function Todo() {
  const { id } = useParams()
  const todo = useTodo(id - 1)

  if (!todo) return null

  return (
    <div>
      <h3>
        {todo.title}
      </h3>
      <p>{todo.description}</p>
      <EditLink to={`/todos/edit/${id}`}>Edit Todo</EditLink>
    </div>
  )
}
