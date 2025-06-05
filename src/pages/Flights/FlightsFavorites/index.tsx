import { Header } from 'components/Header'

import { FlightsFavoritesContainer, FlightsFindAllTable } from './styles'
import { Table } from 'components/Table'
import { flightsHeaders } from 'constants/tableHeaders'

export const FlightsFavorites = () => {
  return (
    <FlightsFavoritesContainer>
      <Header title='Favoritos' />

      <FlightsFindAllTable>
        <Table
          columns={flightsHeaders}
          data={[
            [
              '1',
              'São Paulo',
              'Rio de Janeiro',
              '10:00',
              '12:00',
              '2h',
              'R$ 500,00',
              'Avião X',
            ],
            [
              '2',
              'São Paulo',
              'Belo Horizonte',
              '14:00',
              '16:00',
              '2h',
              'R$ 450,00',
              'Avião Y',
            ],
            [
              '3',
              'São Paulo',
              'Curitiba',
              '18:00',
              '20:00',
              '2h',
              'R$ 400,00',
              'Avião Z',
            ],
          ]}
          fetchData={() => {}}
          maxPage={1}
        />
      </FlightsFindAllTable>
    </FlightsFavoritesContainer>
  )
}
