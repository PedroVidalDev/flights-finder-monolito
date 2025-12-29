import styled from 'styled-components'

export const SideBarContainer = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 320px;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR_DARK};
`
