import { InputProps } from './types'

import { InputContainer, InputError, InputField, InputLabel } from './styles'

export const Input = (props: InputProps) => {
  const { label, error, ...rest } = props

  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputField {...rest} placeholder='Digite aqui...' />
      {error && <InputError>{error}</InputError>}
    </InputContainer>
  )
}
