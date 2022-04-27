export const makeTypoColor = ({ theme, active, disabled }) => {
  if (disabled) {
    return theme.palette.text.disabled
  }
  if (active) {
    return theme.palette.primary.main
  }
  return theme.palette.text.primary
}

export const makeButtonBorder = ({ theme, active, disabled }) => {
  if (disabled) {
    return `1px solid ${theme.palette.border.main}`
  }
  if (active) {
    return `1px solid transparent`
  }
  return `1px solid ${theme.palette.border.main}`
}
