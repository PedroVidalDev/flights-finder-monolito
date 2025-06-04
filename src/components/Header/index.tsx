import { HeaderProps } from './types'

import { Icon } from 'components/Icon'

import {
  HeaderButton,
  HeaderButtons,
  HeaderContainer,
  HeaderTitle,
} from './styles'

export const Header = (props: HeaderProps) => {
  const { title } = props

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtons>
        <HeaderButton>
          <Icon color='PRIMARY_COLOR_DARK' name='IoHeart' size='24' />
        </HeaderButton>
        <HeaderButton>
          <Icon color='PRIMARY_COLOR_DARK' name='IoNotifications' size='24' />
        </HeaderButton>
      </HeaderButtons>
    </HeaderContainer>
  )
}
