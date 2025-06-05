import { Icon } from 'components/Icon'

import { ButtonProps } from './types'

import { ButtonContainer } from './styles'

export const Button = (props: ButtonProps) => {
  const { color, icon, type, text, ...rest } = props

  return (
    <ButtonContainer type={type} color={color} {...rest}>
      {icon && <Icon name={icon} size='20px' color={color} />}
      {text}
    </ButtonContainer>
  )
}
