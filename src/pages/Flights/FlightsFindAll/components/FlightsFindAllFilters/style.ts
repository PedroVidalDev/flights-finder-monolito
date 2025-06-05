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
`

export const FilterButton = styled.button`
  height: 40px;
  width: fit-content;

  padding: 12px 26px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};

  border: none;
  border-radius: 8px;

  cursor: pointer;

  transition: 0.5s;

  margin-left: auto;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_LIGHT};
  }
`
