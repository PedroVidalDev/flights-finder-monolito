import { Table } from './../../../components/Table'
import { Header } from './../../../components/Header'

import { FlightsFindAllContainer, FlightsFindAllTable } from './styles'

export const FlightsFindAll = () => {
  const columns = [
    'ID',
    'Origem',
    'Destino',
    'Data de partida',
    'Data de chegada',
    'Valor',
  ]

  const data = [
    [
      '1',
      'São Paulo',
      'Rio de Janeiro',
      '2023-10-01',
      '2023-10-01',
      'R$ 500,00',
    ],
    [
      '2',
      'Belo Horizonte',
      'Salvador',
      '2023-10-02',
      '2023-10-02',
      'R$ 300,00',
    ],
    ['3', 'Curitiba', 'Florianópolis', '2023-10-03', '2023-10-03', 'R$ 200,00'],
  ]

  return (
    <FlightsFindAllContainer>
      <Header title='Buscar voos' />

      <FlightsFindAllTable>
        <Table columns={columns} data={data} />
      </FlightsFindAllTable>
    </FlightsFindAllContainer>
  )
}
