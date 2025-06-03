import * as IoIcons from 'react-icons/io5'

import { themes } from '@themes/'

export type IconProps = {
  name: keyof typeof IoIcons
  size: string
  color: keyof typeof themes.COLORS
}
