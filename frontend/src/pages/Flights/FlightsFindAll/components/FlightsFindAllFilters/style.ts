import styled from 'styled-components'

export const FlightsFindAllFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 42px;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHTER};

  border-radius: 8px;
`

export const FlightsFindAllFiltersTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`

export const InputsContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  gap: 16px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const FilterButtonContainer = styled.div`
  display: flex;

  justify-content: flex-end;

  width: 100%;

  gap: 16px;
`
