import { Input } from 'components/Input'
import {
  FilterButton,
  FlightsFindAllFiltersContainer,
  FlightsFindAllFiltersTitle,
  InputsContainer,
} from './style'

export const FlightsFindAllFilters = () => {
  return (
    <FlightsFindAllFiltersContainer>
      <FlightsFindAllFiltersTitle>Filtros</FlightsFindAllFiltersTitle>
      <InputsContainer>
        <Input type='text' label='Origem' />
        <Input type='text' label='Destino' />
        <Input type='date' label='Data de partida' />
      </InputsContainer>
      <FilterButton>Filtrar</FilterButton>
    </FlightsFindAllFiltersContainer>
  )
}
