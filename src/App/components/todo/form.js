import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { useTodos } from 'App/store/selectors'
import { addTodo, editTodo } from "App/store/todosSlice"
import styled from 'styled-components'

const Form = styled.form`
  display: grid;
  grid-gap: 16px;
  max-width: 90%;
  min-width: 400px;
  width: 400px;
  margin: auto;
`
const Input = styled.input``
const TextArea = styled.textarea``
const SubmitButton = styled.button`
  background-color: #282c34;
  padding: 8px;
  color: #fff;
`

export default function TodoForm() {
  const { id } = useParams()
  const todos = useTodos()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setTitle(todos[id - 1]?.title)
    setDescription(todos[id - 1]?.description)
  }, [id, todos])

  const onSubmit = (e) => {
    e.preventDefault()

    const newTodo = { title, description }
    if (id) {
      dispatch(editTodo({ id: id - 1, data: newTodo }))
      navigate(`/todos/${id - 1}`)
    } else {
      dispatch(addTodo(newTodo))
      navigate("/todos")
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <SubmitButton>{id ? 'Edit' : 'Add'}</SubmitButton>
      </div>
    </Form>
  )
}
