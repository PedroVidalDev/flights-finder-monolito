import styled, { css } from 'styled-components'

export const TableHeaderCell = styled.div`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    font-size: ${theme.FONT_SIZE.MEDIUM};
  `}
`
