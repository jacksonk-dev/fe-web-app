import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
  text-align: left;
  color: #000;
  background-color:  rgba(0, 0, 0, 0.03);
  border: 3px solid rgba(0, 0, 0, 0.3);
  text-decoration: none;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
`

export default function Todo({ todo }) {
  return (
    <StyledLink to={`/todos/${todo.id + 1}`}>
      <p>{todo.title}</p>
    </StyledLink>
  )
}
