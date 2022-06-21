import { useEffect, useState, useMemo } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

import Todo from './todo'
import { useTodos } from 'App/store/selectors'
import { Fab, PageNumber, PaginateButton, Pagination, TodosContainer } from './components'

export default function Todos() {
  const todos = useTodos()

  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = 5
  const numPages = Math.ceil(todos.length / itemsPerPage)

  useEffect(() => {
    if (searchParams && searchParams.get('page')) {
      const page = searchParams.get('page')
      if (page > 0) {
        setCurrentPage(page)
      } else {
        setCurrentPage(1)
      }
    }
  }, [searchParams, numPages])

  const navigatePage = (page) => {
    setSearchParams({ page })
  }

  const pageNums = useMemo(() => {
    let nums = []
    for (let i = 1; i <= numPages; i++) {
      nums.push(i)
    }

    return nums;
  }, [numPages])

  const firstItemIndex = itemsPerPage * (currentPage - 1);

  if (currentPage > numPages) {
    return (
      <p>No todos to show for this page.</p>
    )
  }

  const todosOnPage = todos?.slice(
    firstItemIndex,
    firstItemIndex + itemsPerPage
  )
  return (
    <>
      <p>Page: {currentPage}, Showing {todosOnPage.length} of {todos.length} todos</p>
      <TodosContainer>
        {
          todosOnPage
            .map((todo, index) => {
              const reactKey = `todo-list-item-${index}: ${todo.title}`
              return (
                <Todo todo={{ ...todo, id: (itemsPerPage * (+currentPage - 1)) + index }} key={reactKey} />
              )
            })
        }
      </TodosContainer>
      {
        numPages > 1 &&
        (
          <Pagination>
            <PaginateButton disabled={+currentPage < 2} onClick={() => navigatePage(+currentPage - 1)}>
              Prev
            </PaginateButton>
            {
              pageNums.map((entry) => {
                const reactKey = `page-${entry}`;
                return (
                  <PageNumber
                    key={reactKey}
                    active={+currentPage === entry}
                    onClick={() => navigatePage(entry)}
                  >
                    {entry}
                  </PageNumber>
                )
              })
            }
            <PaginateButton disabled={+currentPage === numPages} onClick={() => navigatePage(+currentPage + 1)}>
              Next
            </PaginateButton>
          </Pagination>
        )
      }
      <NavLink to="/todos/add">
        <Fab>
          +
        </Fab>
      </NavLink>
    </>
  )
}
