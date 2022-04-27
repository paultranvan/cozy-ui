import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import Box from '../Box'
import IconButton from '../IconButton'
import Typography from '../Typography'
import { makeTypoColor, makeButtonBorder } from './helpers'

const useStyles = makeStyles(theme => ({
  iconButton: {
    border: ({ active, disabled }) =>
      makeButtonBorder({ theme, active, disabled }),
    backgroundColor: ({ active }) =>
      active ? theme.palette.primary.main : 'transparent',
    color: ({ active }) =>
      active ? theme.palette.primary.contrastText : theme.palette.text.icon,
    '&:hover': {
      backgroundColor: ({ active }) =>
        active ? theme.palette.primary.dark : theme.palette.action.hover
    }
  },
  typography: {
    marginTop: '0.25rem',
    color: ({ active, disabled }) => makeTypoColor({ theme, active, disabled })
  }
}))

const CircleButton = ({
  className,
  label,
  variant = 'default',
  disabled,
  children,
  ...props
}) => {
  const styles = useStyles({ active: variant === 'active', disabled })

  return (
    <Box
      className="u-inline-flex u-flex-column u-flex-items-center"
      flex="0 0 auto"
    >
      <IconButton
        className={cx(styles.iconButton, className)}
        size="large"
        disabled={disabled}
        {...props}
      >
        {children}
      </IconButton>
      {label && (
        <Typography className={styles.typography} variant="caption">
          {label}
        </Typography>
      )}
    </Box>
  )
}

CircleButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['default', 'active']).isRequired,
  disabled: PropTypes.bool
}

export default CircleButton
