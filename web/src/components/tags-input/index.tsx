import React, { useEffect, useState, ReactElement, SyntheticEvent } from 'react'
import clsx from 'clsx'
import { FocusRing } from '@react-aria/focus'
import { useTextField } from '@react-aria/textfield'

import { Flex } from '../layout'
import { Text } from '../typography'
import { useStyles } from './styles'
import { useFocusStyle } from '../../styles/common'
import { genUid, usePrevious } from '../../utils'
import { Tag } from '../tag'

type TagsInputProps = {
  label?: string
  children?: Array<ReactElement>
  isNecessityLabel?: boolean
  className?: string
  description?: string
  isRequired?: boolean
  autoFocus?: boolean
  minHeight?: string | number
  maxHeight?: string | number
  value?: string
  tags: Array<{
    id: number
    name: string
    firstName: string
    avatar: string
    lastName: string
    displayName: string
  }>
  onKeyDown: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
  onBlur?: (e: SyntheticEvent) => void
  onRemove: (id: number) => void
  defaultValue?: string
  customLabels?: {
    required?: string
    optional?: string
  }
}

export const TagsInput: React.FC<TagsInputProps> = props => {
  const {
    children,
    className,
    label,
    description,
    isRequired,
    autoFocus,
    onKeyDown,
    onFocus,
    onRemove,
    onBlur,
    tags,
    isNecessityLabel,
    customLabels = { required: 'required', optional: 'optional' },
  } = props

  const prevProps = usePrevious({ tags })
  const [value, setValue] = useState('')

  useEffect(() => {
    if (prevProps) {
      if (prevProps.tags.length < tags.length) {
        setValue('')
      }
    }
  })

  const ref = React.useRef<HTMLInputElement>()
  const inputRef = React.useRef<HTMLInputElement>()

  const classes = useStyles(props)
  const { focusWithBorder } = useFocusStyle(props)

  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      value,
      /* Workaround to display focus frame for a wrapper. Initial was written with useState, to set isFocused.
      But when onBlur triggered, it updated state and onClick element didn't trigger from the first click.
      https://stackoverflow.com/q/58106099
      A possible workaround is to use onMouseDown instead onClick for Button component. But:
        1) UX will get worse
        2) react-aria useButton doesn't have onMouseDown property.
      So, I guess this is the best solution. */
      onKeyDown: e => {
        onKeyDown?.(e)
        if (!value.length && tags && tags.length) {
          onRemove(tags[tags.length - 1].id)
        }
      },
      onFocus: e => {
        onFocus?.(e)
        ref.current.classList.add(...focusWithBorder.split(' '), 'focus')
      },
      onBlur: e => {
        onBlur?.(e)
        ref.current.classList.remove(...focusWithBorder.split(' '), 'focus')
      },
    },
    ref,
  )

  const onInputWrapperClick = () => {
    inputRef.current.focus()
  }

  return (
    <Flex
      direction="column"
      gap="0.5x"
      className={clsx(classes.wrapper, className)}
    >
      {label && (
        <label className={classes.label} {...labelProps}>
          <Text
            as="span"
            emphasis
            color="formfieldLabel"
            maxWidth="initial"
            size="small"
          >
            {label.toString()}
          </Text>
          {isNecessityLabel && (
            <Text
              color="secondary"
              size="small"
              as="span"
              className={classes.suffix}
            >
              ({isRequired ? customLabels.required : customLabels.optional})
            </Text>
          )}
        </label>
      )}
      <div
        className={classes.inputWrapper}
        onClick={onInputWrapperClick}
        onKeyPress={onInputWrapperClick}
        ref={ref}
      >
        <div className={classes.scrollbar}>
          {tags.map(tag => {
            const { id, firstName, avatar, lastName, displayName } = tag
            const name =
              !firstName || !lastName ? displayName : `${firstName} ${lastName}`

            return (
              <Tag
                key={id}
                className={classes.tag}
                avatarSrc={avatar}
                avatarAlt={name}
                onRemove={() => {
                  onRemove(id)
                }}
              >
                {name}
              </Tag>
            )
          })}
          {children &&
            children.map(child => (
              <div key={genUid()} className={classes.tag}>
                {child}
              </div>
            ))}
          <FocusRing {...(autoFocus && autoFocus)}>
            <input {...inputProps} ref={inputRef} className={classes.input} />
          </FocusRing>
        </div>
      </div>
      {description && (
        <Text color="secondary" maxWidth="initial" as="span" size="small">
          {description}
        </Text>
      )}
    </Flex>
  )
}
