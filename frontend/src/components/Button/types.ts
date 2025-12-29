import * as IoIcons from 'react-icons/io5'

import { themes } from '@themes/'

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  type: 'primary' | 'secondary'
  color: keyof typeof themes.COLORS
  icon?: keyof typeof IoIcons
  text?: string
}
