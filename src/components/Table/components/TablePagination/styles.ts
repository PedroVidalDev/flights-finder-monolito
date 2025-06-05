import styled, { css } from 'styled-components'

export const TablePaginationContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;

  gap: 16px;
  width: 100%;
`

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_LIGHT};
  border: none;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
`

export const PaginationPage = styled.span`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_DARK};
    font-weight: ${theme.FONT_WEIGHT.MEDIUM};
    font-size: ${theme.FONT_SIZE.MEDIUM};
  `}

  white-space: nowrap;
`
