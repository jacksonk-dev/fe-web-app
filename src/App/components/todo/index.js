import { useParams } from 'react-router-dom'

import { useTodo } from 'App/store/selectors'

import Form from '.'

export default function Todo() {
  const { id, edit } = useParams()
  const todo = useTodo(id - 1)

  if (!todo) return null

  if (!!edit) {
    return
  }

  return (
    <div>
      <p>
        {todo.title}
      </p>
      <p>{todo.description}</p>
    </div>
  )
}
