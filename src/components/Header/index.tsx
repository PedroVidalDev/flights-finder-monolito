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

  const currentPath = window.location.pathname

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtons>
        {currentPath !== '/flights/favorites' ? (
          <HeaderButton onClick={() => navigate('/flights/favorites')}>
            <Icon color='PRIMARY_COLOR_DARK' name='IoHeart' size='24' />
            <p> Favoritos </p>
          </HeaderButton>
        ) : (
          <HeaderButton onClick={() => navigate('/flights')}>
            <Icon color='PRIMARY_COLOR_DARK' name='IoAirplane' size='24' />
            <p> Voltar para voos </p>
          </HeaderButton>
        )}
      </HeaderButtons>
    </HeaderContainer>
  )
}
