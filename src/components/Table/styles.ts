import styled, { css } from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 24px;
`

export const TableRow = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  transition: 0.5s;

  &:hover {
    transform: scale(1.01);
  }
`

export const TableCell = styled.div`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_DARK};
    font-weight: ${theme.FONT_WEIGHT.LIGHT};
    font-size: ${theme.FONT_SIZE.MEDIUM};
  `}

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
