import { Icon } from 'components/Icon'

import {
  PaginationButton,
  PaginationPage,
  TablePaginationContainer,
} from './styles'

export const TablePagination = () => {
  return (
    <TablePaginationContainer>
      <PaginationButton>
        <Icon name='IoChevronBack' color='BLACK' size='24' />
      </PaginationButton>
      <PaginationPage>1</PaginationPage>
      <PaginationButton>
        <Icon name='IoChevronForward' color='BLACK' size='24' />
      </PaginationButton>
    </TablePaginationContainer>
  )
}
