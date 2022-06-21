import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { useTodos } from 'App/store/selectors'
import { addTodo, editTodo, deleteToDo } from "App/store/todosSlice"
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 16px;
  max-width: 90%;
  min-width: 400px;
  width: 400px;
  margin: auto;
  height: calc(100vh - 100px)
`
const Input = styled.input`
  padding: 8px
`
const TextArea = styled.textarea`
  padding: 8px
`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px auto;
  width: calc(200px + 8px);
`
const SubmitButton = styled.button`
  background-color: #282c34;
  padding: 8px;
  color: #fff;
  width: 100px;
`
const DeleteButton = styled.button`
  background-color: #B71C1C;
  color: #fff;
  width: 100px;
  margin-left: 8px;
`

export default function TodoForm() {
  const { id } = useParams()
  const todos = useTodos()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      setTitle(todos[id - 1]?.title)
      setDescription(todos[id - 1]?.description)
    }
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

  const onDeleteClick = () => {
    dispatch(deleteToDo(id - 1))
    navigate("/todos")
  }

  return (
    <Form onSubmit={onSubmit}>
      <p>{id ? 'Edit' : 'Create'} Todo</p>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <ButtonsContainer>
        <SubmitButton>Save</SubmitButton>
        {
          id &&
          (
            <DeleteButton
              type="button"
              onClick={onDeleteClick}
            >
              Delete
            </DeleteButton>
          )
        }
      </ButtonsContainer>
    </Form>
  )
}
