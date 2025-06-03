import {
  HeaderButton,
  HeaderButtons,
  HeaderContainer,
  HeaderTitle,
} from './styles'
import { HeaderProps } from './types'

export const Header = (props: HeaderProps) => {
  const { title } = props

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderButtons>
        <HeaderButton>Find Flights</HeaderButton>
        <HeaderButton>Create Flight</HeaderButton>
      </HeaderButtons>
    </HeaderContainer>
  )
}
