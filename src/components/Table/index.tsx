import { TableHeader } from './components/TableHeader'

import { TableProps } from './types'

import { TableCell, TableContainer, TableRow } from './styles'
import { TablePagination } from './components/TablePagination'

export const Table = (props: TableProps) => {
  const { columns, data, fetchData } = props

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

      <TablePagination fetchData={fetchData} />
    </TableContainer>
  )
}
