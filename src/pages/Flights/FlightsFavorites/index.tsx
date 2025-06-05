import { useEffect, useState } from 'react'

import { flightsHeaders } from 'constants/tableHeaders'

import { getFormattedDate } from 'utils/getFormattedDate'

import { Table } from 'components/Table'
import { Header } from 'components/Header'

import { useFlights } from 'hooks/useFlights'

import { getStorageFavoriteFlights } from 'services/storage'

import { FlightsFavoritesContainer, FlightsFindAllTable } from './styles'

export const FlightsFavorites = () => {
  const { fetchGetAllFlights, flights } = useFlights()

  const [maxPage, setMaxPage] = useState<number>(1)

  useEffect(() => {
    fetchGetAllFlights(null, [
      { field: 'id', value: getStorageFavoriteFlights() },
    ])
    setMaxPage(Math.ceil(getStorageFavoriteFlights().length / 10))
  }, [fetchGetAllFlights])

  return (
    <FlightsFavoritesContainer>
      <Header title='Favoritos' />

      <FlightsFindAllTable>
        <Table
          columns={flightsHeaders}
          data={flights.map((flight) => {
            return [
              flight.id,
              flight.flightNumber,
              flight.airline,
              flight.origin,
              flight.destination,
              getFormattedDate(flight.departure),
              getFormattedDate(flight.arrival),
              flight.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }),
            ]
          })}
          fetchData={(page: number) =>
            fetchGetAllFlights(page, [
              { field: 'id', value: getStorageFavoriteFlights() },
            ])
          }
          maxPage={maxPage}
        />
      </FlightsFindAllTable>
    </FlightsFavoritesContainer>
  )
}
