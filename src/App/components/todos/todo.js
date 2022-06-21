import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Root = styled.div`
  text-align: left;
`

export default function Todo({ todo }) {
  return (
    <Root>
      <NavLink to={`/todos/${todo.id + 1}`}>
        <p>{todo.title}</p>
      </NavLink>
    </Root>
  )
}
