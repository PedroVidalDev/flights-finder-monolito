import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK};
`

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 4px;

  padding: 0 12px;

  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_LIGHT};

  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};

  &:focus-visible {
    outline: none;
  }
`

export const InputError = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  color: ${({ theme }) => theme.COLORS.ERROR};
`
