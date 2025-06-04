import { useEffect } from 'react'

import { Table } from 'components/Table'
import { Header } from 'components/Header'

import { flightsHeaders } from 'constants/tableHeaders'

import { useFlights } from 'hooks/useFlights'

import { FlightsFindAllContainer, FlightsFindAllTable } from './styles'

export const FlightsFindAll = () => {
  const { fetchGetAllFlights, flights } = useFlights()

  console.log('FlightsFindAll - flights', flights)

  useEffect(() => {
    fetchGetAllFlights()
  }, [fetchGetAllFlights])

  return (
    <FlightsFindAllContainer>
      <Header title='Buscar voos' />

      <FlightsFindAllTable>
        <Table columns={flightsHeaders} data={[]} />
      </FlightsFindAllTable>
    </FlightsFindAllContainer>
  )
}
