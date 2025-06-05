import { useState } from 'react'

import { Input } from 'components/Input'

import {
  FilterButton,
  FlightsFindAllFiltersContainer,
  FlightsFindAllFiltersTitle,
  InputsContainer,
} from './style'
import { FlightsFindAllFiltersProps } from './types'

export const FlightsFindAllFilters = (
  flightsFindAllFiltersProps: FlightsFindAllFiltersProps,
) => {
  const { fetchData } = flightsFindAllFiltersProps

  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [departureDate, setDepartureDate] = useState('')

  const handleFilter = () => {
    const filters = []

    if (origin) {
      filters.push({ field: 'origin', value: origin })
    }
    if (destination) {
      filters.push({ field: 'destination', value: destination })
    }
    if (departureDate) {
      filters.push({ field: 'departure', value: departureDate })
    }

    fetchData(null, filters)
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
      <FilterButton onClick={handleFilter}>Filtrar</FilterButton>
    </FlightsFindAllFiltersContainer>
  )
}
