import { TableHeader } from './components/TableHeader'

import { TableProps } from './types'

import { TableCell, TableContainer, TableRow } from './styles'

export const Table = (props: TableProps) => {
  const { columns, data } = props

  return (
    <TableContainer>
      <TableHeader columns={columns} />

      {data.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <TableCell key={cellIndex}>{String(cell)}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableContainer>
  )
}
