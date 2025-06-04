import styled, { css } from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 16px;
`

export const TableRow = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`

export const TableCell = styled.div`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_DARK};
    font-weight: ${theme.FONT_WEIGHT.LIGHT};
    font-size: ${theme.FONT_SIZE.MEDIUM};
  `}
`
