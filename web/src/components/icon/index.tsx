import clsx from 'clsx'
import React from 'react'
import { createUseStyles } from 'react-jss'

import * as icons from '../../icons'
import { TextColorType } from '../typography/helper'
import { getColorFromProp } from '../typography/styles'
import { testify } from '../../utils'

type IconSize = 'small' | 'medium' | 'large'

export type IconTypes =
  | 'arrowLeft'
  | 'close'
  | 'people'
  | 'person'
  | 'checkmark'
  | 'lock'
  | 'alert'
  | 'search'
  | 'addPerson'

export type IconProps = {
  name: IconTypes
  size?: IconSize
  color?: TextColorType
  className?: string
  ariaLabel?: string
  ariaHidden?: boolean
  focusable?: boolean
  width?: number
  height?: number
}

const getFromSize = (name: string, size: IconSize) => {
  switch (size) {
    case 'small':
      return icons[`${name}16`]
    case 'medium':
      return icons[`${name}20`]
    case 'large':
      return icons[`${name}24`]
    default:
      return null
  }
}

const useStyles = createUseStyles(() => ({
  icon: {
    color: getColorFromProp,
  },
}))

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  className,
  ariaLabel,
  ariaHidden,
  ...rest
}) => {
  const IconComponent = getFromSize(name, size)
  const classes = useStyles({ color })
  return (
    <IconComponent
      className={clsx(classes.icon, className)}
      {...rest}
      {...testify('icon', name)}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? false : ariaHidden}
    />
  )
}

Icon.defaultProps = {
  ariaHidden: true,
  size: 'large',
}
