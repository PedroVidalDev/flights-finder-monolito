import { useState } from 'react'

import { Input } from 'components/Input'

import {
  FilterButton,
  FlightsFindAllFiltersContainer,
  FlightsFindAllFiltersTitle,
  InputsContainer,
} from './style'

export const FlightsFindAllFilters = () => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [departureDate, setDepartureDate] = useState('')

  const handleFilter = () => {
    // Implement filter logic here
    console.log('Filtering flights with:', {
      origin,
      destination,
      departureDate,
    })
  }

  return (
    <FlightsFindAllFiltersContainer>
      <FlightsFindAllFiltersTitle>Filtros</FlightsFindAllFiltersTitle>
      <InputsContainer>
        <Input
          type='text'
          label='Origem'
          onChange={(e) => setOrigin(e.target.value)}
        />

        <Input
          type='text'
          label='Destino'
          onChange={(e) => setDestination(e.target.value)}
        />

        <Input
          type='date'
          label='Data de partida'
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </InputsContainer>
      <FilterButton onSubmit={handleFilter}>Filtrar</FilterButton>
    </FlightsFindAllFiltersContainer>
  )
}
