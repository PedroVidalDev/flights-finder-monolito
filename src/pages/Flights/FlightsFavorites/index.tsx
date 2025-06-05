import { useCallback, useEffect, useState } from 'react'

import { flightsHeaders } from 'constants/tableHeaders'

import { getFormattedDate } from 'utils/getFormattedDate'

import { Table } from 'components/Table'
import { Header } from 'components/Header'

import { useFlights } from 'hooks/useFlights'

import { getStorageFavoriteFlights } from 'services/storage'

import { FlightDTO } from 'dtos/FlightDTO'

import { FlightsFavoritesContainer, FlightsFindAllTable } from './styles'

export const FlightsFavorites = () => {
  const { fetchGetAllFlights, flights } = useFlights()

  const [favoriteFlights, setFavoriteFlights] = useState<FlightDTO[]>([])
  const [maxPage, setMaxPage] = useState(0)

  const defineFavoriteFlight = useCallback(() => {
    const storageFavoriteFlights = getStorageFavoriteFlights()
    const favoriteFlights = flights.filter((flight) =>
      storageFavoriteFlights.includes(flight.id),
    )
    setFavoriteFlights(favoriteFlights)
    setMaxPage(Math.ceil(favoriteFlights.length / 10))
  }, [flights])

  useEffect(() => {
    fetchGetAllFlights()
    defineFavoriteFlight()
  }, [defineFavoriteFlight, fetchGetAllFlights])

  return (
    <FlightsFavoritesContainer>
      <Header title='Favoritos' />

      <FlightsFindAllTable>
        <Table
          columns={flightsHeaders}
          data={favoriteFlights.map((flight) => {
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
          fetchData={fetchGetAllFlights}
          maxPage={maxPage}
        />
      </FlightsFindAllTable>
    </FlightsFavoritesContainer>
  )
}
