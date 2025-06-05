import styled from 'styled-components'

import { themes } from '@themes/'

interface ButtonProps {
  type: 'primary' | 'secondary'
  color: keyof typeof themes.COLORS
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 40px;
  width: fit-content;

  gap: 8px;
  padding: 12px 26px;

  background-color: ${({ theme, type, color }) =>
    type === 'primary' ? theme.COLORS[color] : 'transparent'};
  color: ${({ theme, type, color }) =>
    type === 'primary' ? theme.COLORS.WHITE : theme.COLORS[color]};

  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};

  border: ${({ theme, type, color }) =>
    type === 'primary' ? 'none' : `1px solid ${theme.COLORS[color]}`};
  border-radius: 8px;

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`
