import { useParams } from 'react-router-dom'

import { useTodo } from 'App/store/selectors'

export default function Todo() {
  const { id } = useParams()
  const todo = useTodo(id - 1)

  if (!todo) return null

  return (
    <div>
      <p>
        {todo.title}
      </p>
      <p>{todo.description}</p>
    </div>
  )
}
