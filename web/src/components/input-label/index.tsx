import React from 'react'
import clsx from 'clsx'
import { useTheme } from 'react-jss'
import { VisuallyHidden } from '@react-aria/visually-hidden'

import { useStyles } from './styles'
import { Text } from '../typography'

export interface Props {
  id?: string
  label?: string
  helpText?: string
  isDisabled?: boolean
  renderHiddenInput?: () => JSX.Element
  renderInput?: () => JSX.Element
  helpTextClass?: string
}

export const InputLabel: React.FC<Props> = props => {
  const {
    label,
    isDisabled,
    id,
    renderHiddenInput,
    renderInput,
    helpTextClass,
  } = props

  const theme = useTheme()
  const classes = useStyles({
    ...props,
    theme,
  })
  const hasLabel = label && label !== ''
  const Wrapper = hasLabel ? Text : 'div'
  return (
    <Text
      size="base"
      as="label"
      color={isDisabled ? 'secondary' : 'primary'}
      htmlFor={id}
    >
      <VisuallyHidden>{renderHiddenInput?.()}</VisuallyHidden>

      <div className={classes.label}>
        {renderInput?.()}
        {hasLabel && <span id={label.replace(/\s/g, '')}>{label}</span>}
      </div>

      {hasLabel && props.helpText && (
        <Text
          size="small"
          color="secondary"
          className={clsx(helpTextClass || classes.helpText)}
        >
          {props.helpText}
        </Text>
      )}
    </Text>
  )
}
