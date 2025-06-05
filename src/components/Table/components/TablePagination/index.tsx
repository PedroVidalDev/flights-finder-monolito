import { useState } from 'react'

import { Icon } from 'components/Icon'

import { PaginationProps } from './types'

import {
  PaginationButton,
  PaginationPage,
  TablePaginationContainer,
} from './styles'

export const TablePagination = (paginationProps: PaginationProps) => {
  const [page, setPage] = useState(1)

  const { fetchData } = paginationProps

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    fetchData(newPage)
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
      <PaginationButton onClick={() => handlePageChange(page + 1)}>
        <Icon name='IoChevronForward' color='BLACK' size='24' />
      </PaginationButton>
    </TablePaginationContainer>
  )
}
