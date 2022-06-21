import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from "App/store/todosSlice"
import styled from 'styled-components'

const Form = styled.form`
  display: grid;
  grid-gap: 16px;
  max-width: 90%;
  min-width: 400px;
  width: 400px;
  margin: auto;
`
const Input = styled.input`

`
const TextArea = styled.textarea``
const SubmitButton = styled.button`
  background-color: #282c34;
  padding: 8px;
  color: #fff;
`

export default function TodoForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    const newTodo = { title, description }
    dispatch(add(newTodo))
    navigate("/todos")
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
      <SubmitButton>Add</SubmitButton>
    </Form>
  )
}
