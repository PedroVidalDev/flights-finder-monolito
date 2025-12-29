import { useState } from 'react'

import { Icon } from 'components/Icon'

import { PaginationProps } from './types'

import {
  PaginationButton,
  PaginationPage,
  TablePaginationContainer,
} from './styles'

export const TablePagination = (paginationProps: PaginationProps) => {
  const { fetchData, maxPage } = paginationProps

  const [page, setPage] = useState(1)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    fetchData(newPage)

    console.log(`Fetching data for page: ${newPage}`)
    console.log(`Max page: ${maxPage}`)
  }

  return (
    <TablePaginationContainer>
      <PaginationButton
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        <Icon name='IoChevronBack' color='BLACK' size='24' />
      </PaginationButton>
      <PaginationPage>{page}</PaginationPage>
      <PaginationButton
        disabled={page === maxPage}
        onClick={() => handlePageChange(page + 1)}
      >
        <Icon name='IoChevronForward' color='BLACK' size='24' />
      </PaginationButton>
    </TablePaginationContainer>
  )
}
