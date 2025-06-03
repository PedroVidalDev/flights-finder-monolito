import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 16px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY.MEDIUM};
`

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.GRAY.DARK};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export const HeaderButton = styled.button`
  border: none;
  border-radius: 100%;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_LIGHT};
  }
`
