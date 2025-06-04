import 'styled-components'
import { themes } from 'themes/'

type ThemeType = typeof themes

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
