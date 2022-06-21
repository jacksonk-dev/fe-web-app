import styled from 'styled-components'

export const Fab = styled.button`
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
  color: #fff;
  background-color: #282c34;
  cursor: pointer;
`

export const TodosContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  width: 100%;
  padding-bottom: 64px;
`
export const Pagination = styled.div`
  position: fixed;
  bottom: 8px;
`

export const PageNumber = styled.button`
  padding: 8px;
  width: 32px;
  height: 32px;
  color: #fff;
  font-weight: 550; 
  border-radius: 5px;
  color: ${({ active }) => active ? '#000' : '#fff'};
  background-color: ${({ active }) => active ? '#fff' : '#282c34'};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  &:not(:last-child) {
    margin-right: 4px;
  }
`
export const PaginateButton = styled(PageNumber)`
  width: 64px;
`
