import { useState } from 'react'

import { Input } from 'components/Input'

import { FlightsFindAllFiltersProps } from './types'

import {
  FilterButtonContainer,
  FlightsFindAllFiltersContainer,
  FlightsFindAllFiltersTitle,
  InputsContainer,
} from './style'
import { Button } from 'components/Button'

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

  const clearFilter = () => {
    setOrigin('')
    setDestination('')
    setDepartureDate('')

    fetchData(null, [])
  }

  return (
    <FlightsFindAllFiltersContainer>
      <FlightsFindAllFiltersTitle>Filtros</FlightsFindAllFiltersTitle>
      <InputsContainer>
        <Input
          type='text'
          label='Origem'
          onChange={(e) => setOrigin(e.target.value)}
          value={origin}
        />

        <Input
          type='text'
          label='Destino'
          onChange={(e) => setDestination(e.target.value)}
          value={destination}
        />

        <Input
          type='date'
          label='Data de partida'
          onChange={(e) => setDepartureDate(e.target.value)}
          value={departureDate}
        />
      </InputsContainer>
      <FilterButtonContainer>
        <Button
          type='secondary'
          color='PRIMARY_COLOR_DARK'
          onClick={clearFilter}
          text='Limpar filtros'
        />
        <Button
          type='primary'
          color='PRIMARY_COLOR'
          onClick={handleFilter}
          text='Filtrar'
        />
      </FilterButtonContainer>
    </FlightsFindAllFiltersContainer>
  )
}
