import { useEffect } from 'react'

import { Table } from 'components/Table'
import { Header } from 'components/Header'

import { flightsHeaders } from 'constants/tableHeaders'

import { useFlights } from 'hooks/useFlights'

import { FlightsFindAllContainer, FlightsFindAllTable } from './styles'
import { getFormattedDate } from 'utils/getFormattedDate'

export const FlightsFindAll = () => {
  const { fetchGetAllFlights, flights } = useFlights()

  useEffect(() => {
    fetchGetAllFlights()
  }, [fetchGetAllFlights])

  return (
    <FlightsFindAllContainer>
      <Header title='Buscar voos' />

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
        />
      </FlightsFindAllTable>
    </FlightsFindAllContainer>
  )
}
