import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtons>
        <HeaderButton onClick={() => navigate('/flights/favorites')}>
          <Icon color='PRIMARY_COLOR_DARK' name='IoHeart' size='24' />
        </HeaderButton>
        <HeaderButton>
          <Icon color='PRIMARY_COLOR_DARK' name='IoNotifications' size='24' />
        </HeaderButton>
      </HeaderButtons>
    </HeaderContainer>
  )
}
