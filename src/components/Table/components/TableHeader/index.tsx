import { TableRow } from '../../styles'

import { TableHeaderProps } from './types'

import { TableHeaderActionCell, TableHeaderCell } from './styles'

export const TableHeader = (props: TableHeaderProps) => {
  const { columns } = props

  return (
    <TableRow>
      {columns.map((column, index) => (
        <TableHeaderCell key={index}>{column}</TableHeaderCell>
      ))}
      <TableHeaderActionCell />
    </TableRow>
  )
}
