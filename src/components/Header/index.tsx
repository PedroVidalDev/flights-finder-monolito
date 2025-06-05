import { useNavigate } from 'react-router-dom'

import { HeaderProps } from './types'

import { Button } from 'components/Button'

import { HeaderButtons, HeaderContainer, HeaderTitle } from './styles'

export const Header = (props: HeaderProps) => {
  const { title } = props

  const currentPath = window.location.pathname

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtons>
        {currentPath !== '/flights/favorites' ? (
          <Button
            color='PRIMARY_COLOR_DARK'
            icon='IoHeart'
            text='Favoritos'
            type='secondary'
            onClick={() => navigate('/flights/favorites')}
          />
        ) : (
          <Button
            color='PRIMARY_COLOR_DARK'
            icon='IoArrowBack'
            text='Voltar para voos'
            type='secondary'
            onClick={() => navigate('/flights')}
          />
        )}
      </HeaderButtons>
    </HeaderContainer>
  )
}
