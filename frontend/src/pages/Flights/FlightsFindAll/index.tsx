import { useEffect } from 'react'

import { getFormattedDate } from 'utils/getFormattedDate'

import { Table } from 'components/Table'
import { Header } from 'components/Header'
import { FlightsFindAllFilters } from './components/FlightsFindAllFilters'

import { flightsHeaders } from 'constants/tableHeaders'

import { useFlights } from 'hooks/useFlights'

import { FlightsFindAllContainer, FlightsFindAllTable } from './styles'

export const FlightsFindAll = () => {
  const { fetchGetAllFlights, flights, maxPage } = useFlights()

  useEffect(() => {
    fetchGetAllFlights()
  }, [fetchGetAllFlights])

  return (
    <FlightsFindAllContainer>
      <Header title='Buscar voos' />

      <FlightsFindAllFilters fetchData={fetchGetAllFlights} />

      <FlightsFindAllTable>
        <Table
          fetchData={fetchGetAllFlights}
          maxPage={maxPage}
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
        />
      </FlightsFindAllTable>
    </FlightsFindAllContainer>
  )
}
