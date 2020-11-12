import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'

import { GroupProps } from '.'

export default createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      position: 'relative',
    },
    group: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeAvatarSmall
        return theme.sizeAvatarMedium
      },
      width: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeAvatarSmall
        return theme.sizeAvatarMedium
      },
      borderRadius: '50%',
      backgroundColor: theme.colorBackgroundAvatarGroup,
    },
    color: {
      width: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeGroupcolorSmall
        return theme.sizeGroupcolorMedium
      },
      height: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeGroupcolorSmall
        return theme.sizeGroupcolorMedium
      },
      borderRadius: '50%',
      backgroundColor: ({ color }: GroupProps) => {
        switch (color) {
          case 'grey':
            return theme.colorBackgroundAvatarGroupColor01
            break
          case 'light-grey':
            return theme.colorBackgroundAvatarGroupColor02
            break
          case 'gold':
            return theme.colorBackgroundAvatarGroupColor03
            break
          case 'orange':
            return theme.colorBackgroundAvatarGroupColor04
            break
          case 'pink':
            return theme.colorBackgroundAvatarGroupColor05
            break
          case 'purple':
            return theme.colorBackgroundAvatarGroupColor06
            break
          case 'blue':
            return theme.colorBackgroundAvatarGroupColor07
            break
          case 'light-blue':
            return theme.colorBackgroundAvatarGroupColor08
            break
          case 'green':
            return theme.colorBackgroundAvatarGroupColor09
            break
          case 'light-green':
            return theme.colorBackgroundAvatarGroupColor10
            break
          default:
            return theme.colorBackgroundAvatarGroupColor01
            break
        }
      },
    },
    status: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      borderRadius: '50%',
      backgroundColor: theme.colorBackgroundGrouptypeIndicator,
      width: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeGrouptypeIndicatorSmall
        return theme.sizeGrouptypeIndicatorMedium
      },
      height: ({ size }: GroupProps) => {
        if (size === 'small') return theme.sizeGrouptypeIndicatorSmall
        return theme.sizeGrouptypeIndicatorMedium
      },
    },
  }),
)