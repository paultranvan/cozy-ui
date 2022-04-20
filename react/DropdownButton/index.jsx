import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import Dropdown from '../Dropdown'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    width: ({ fullWidth }) => (fullWidth ? `calc(100% + 16px)` : 'auto'),
    margin: '-8px',
    padding: '8px'
  },
  text: {
    textTransform: 'none'
  }
})

const DropdownButton = forwardRef(
  (
    {
      spaceBetween = false,
      textVariant = 'body1',
      disabled = false,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const { root, text } = useStyles({ fullWidth })

    return (
      <Button ref={ref} classes={{ root, text }} disabled={disabled} {...props}>
        <Dropdown
          variant={textVariant}
          spaceBetween={spaceBetween}
          disabled={disabled}
        >
          {children}
        </Dropdown>
      </Button>
    )
  }
)

DropdownButton.propTypes = {
  /** Weither there is a space between the label and the icon */
  spaceBetween: PropTypes.bool,
  /** Like variant from Typography component */
  textVariant: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool
}

export default DropdownButton
