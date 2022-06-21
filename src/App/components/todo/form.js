import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { useTodo } from 'App/store/selectors'
import { addTodo, editTodo, deleteToDo } from "App/store/todosSlice"
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 16px;
  width: 90%;
  margin: auto;
  height: calc(100vh - 100px);
  @media screen and (min-width: 768px){
    width: 500px;
  }
`
const FormTitle = styled.p`
  font-weight: 550;
  font-size: 24px;
`
const Input = styled.input`
  padding: 8px;
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
  padding: 10px;
  color: #fff;
  width: 100px;
  border: none;
  opacity: ${(props) => props.disabled ? 0.5 : 1}
`
const DeleteButton = styled.button`
  background-color: #B71C1C;
  color: #fff;
  width: 100px;
  margin-left: 8px;
  padding: 10px;
  border: none;
`

export default function TodoForm() {
  const { id } = useParams()
  const todo = useTodo(id - 1)

  const [actualId, setActualId] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      setActualId(id - 1)
    }
  }, [id])

  useEffect(() => {
    if (todo) {
      setTitle(todo.title)
      setDescription(todo.description)
    }
  }, [todo])

  const onSubmit = (e) => {
    e.preventDefault()

    const newTodo = { title, description }
    if (actualId !== undefined && todo) {
      dispatch(editTodo({ id: actualId, data: newTodo }))
      navigate(`/todos/${id}`)
    } else {
      dispatch(addTodo(newTodo))
      navigate("/todos")
    }
  }

  const onDeleteClick = () => {
    dispatch(deleteToDo(actualId))
    navigate("/todos")
  }

  return (
    <Form onSubmit={!!title ? onSubmit : undefined}>
      <FormTitle>{id && todo ? 'Edit' : 'Create'} Todo</FormTitle>
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
        <SubmitButton disabled={!title}>Save</SubmitButton>
        {
          id && todo &&
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
