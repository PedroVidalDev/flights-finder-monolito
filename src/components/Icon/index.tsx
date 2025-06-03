import * as IoIcons from 'react-icons/io5'

import { themes } from './../../themes/'

import { IconProps } from './types'

import { Container } from './styles'

export const Icon = (props: IconProps) => {
  const { name, size, color = 'BLACK' } = props

  const IconComponent = IoIcons[name] || IoIcons.IoAirplane

  return (
    <Container>
      <IconComponent size={size} color={themes.COLORS[color]} />
    </Container>
  )
}
