import { useEffect, useState } from 'react'

import { Icon } from 'components/Icon'
import { TableHeader } from './components/TableHeader'
import { TablePagination } from './components/TablePagination'

import { TableProps } from './types'

import {
  appendStorageFavoriteFlights,
  getStorageFavoriteFlights,
} from 'services/storage'

import {
  NoDataWarning,
  TableCell,
  TableCellAction,
  TableContainer,
  TableRow,
} from './styles'

export const Table = (props: TableProps) => {
  const { columns, data, fetchData, maxPage } = props

  const [favoriteFlights, setFavoriteFlights] = useState<number[]>([])

  const handleFavorite = (id: number) => {
    appendStorageFavoriteFlights(id)

    window.location.reload()
  }

  useEffect(() => {
    setFavoriteFlights(getStorageFavoriteFlights())
  }, [])

  return data.length > 0 ? (
    <TableContainer>
      <TableHeader columns={columns} />

      {data.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <TableCell key={cellIndex}>{String(cell)}</TableCell>
          ))}
          <TableCellAction
            onClick={() => handleFavorite(data[rowIndex][0] as number)}
          >
            <Icon
              name='IoHeart'
              size='24'
              color={
                favoriteFlights.includes(data[rowIndex][0] as number)
                  ? 'PRIMARY_COLOR'
                  : 'GRAY_DARK'
              }
            />
          </TableCellAction>
        </TableRow>
      ))}

      <TablePagination fetchData={fetchData} maxPage={maxPage} />
    </TableContainer>
  ) : (
    <NoDataWarning> Nenhum voo encontrado... </NoDataWarning>
  )
}
