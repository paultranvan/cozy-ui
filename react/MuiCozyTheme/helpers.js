import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'

import {
  getCssVariableValue,
  getInvertedCssVariableValue
} from '../utils/color'
import isTesting from '../helpers/isTesting'
import AccordionExpandIcon from './AccordionExpandIcon'

const SWITCH_BAR_WIDTH = 25

const themesCommonConfig = {
  shape: {
    borderRadius: 6
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1023,
      xl: 1200
    }
  },
  zIndex: {
    modal: getCssVariableValue('zIndex-modal')
  },
  props: {
    MuiTabs: {
      textColor: 'primary',
      TabIndicatorProps: { color: 'primary' }
    },
    MuiButton: {
      disableRipple: true
    },
    MuiListItem: {
      disableRipple: true
    },
    MuiTooltip: {
      arrow: true
    },
    MuiAccordionSummary: {
      expandIcon: <AccordionExpandIcon />
    }
  },
  ...(isTesting() && { transitions: { create: () => 'none' } })
}

const makeTypography = palette => ({
  fontFamily: getCssVariableValue('primaryFont') || 'Lato',
  h1: {
    fontSize: 48,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.087,
    letterSpacing: -0.8
  },
  h2: {
    fontSize: 32,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.313,
    letterSpacing: -0.4
  },
  h3: {
    fontSize: 24,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.167
  },
  h4: {
    fontSize: 20,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.167
  },
  h5: {
    fontSize: 18,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.313
  },
  h6: {
    fontSize: 16,
    color: palette.text.primary,
    fontWeight: 'bold',
    lineHeight: 1.313
  },
  subtitle1: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 1.313,
    textTransform: 'uppercase'
  },
  body1: {
    fontSize: 16,
    lineHeight: 1.313,
    color: palette.text.primary
  },
  body2: {
    fontSize: 14,
    lineHeight: 1.313,
    color: palette.text.primary
  },
  button: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 1.313
  },
  caption: {
    fontSize: 12,
    lineHeight: 1.313,
    color: palette.text.secondary,
    display: 'block'
  }
})

const makePalette = type => {
  const getCssValue =
    type === 'dark' ? getInvertedCssVariableValue : getCssVariableValue

  return {
    type,
    primary: {
      light: getCssValue('primaryColorLight'),
      main: getCssValue('primaryColor'),
      dark: getCssValue('primaryColorDark'),
      contrastText: getCssValue('primaryContrastTextColor')
    },
    secondary: {
      light: getCssValue('secondaryColorLight'),
      main: getCssValue('secondaryColor'),
      dark: getCssValue('secondaryColorDark'),
      contrastText: getCssValue('secondaryContrastTextColor')
    },
    error: {
      light: getCssValue('errorColorLight'),
      main: getCssValue('errorColor'),
      dark: getCssValue('errorColorDark'),
      contrastText: getCssValue('errorColorContrastText')
    },
    warning: {
      light: getCssValue('warningColorLight'),
      main: getCssValue('warningColor'),
      dark: getCssValue('warningColorDark'),
      contrastText: getCssValue('warningColorContrastText')
    },
    success: {
      light: getCssValue('successColorLight'),
      main: getCssValue('successColor'),
      dark: getCssValue('successColorDark'),
      contrastText: getCssValue('successColorContrastText')
    },
    info: {
      light: getCssValue('infoColorLight'),
      main: getCssValue('infoColor'),
      dark: getCssValue('infoColorDark'),
      contrastText: getCssValue('infoColorContrastText')
    },
    text: {
      primary: getCssValue('primaryTextColor'),
      secondary: getCssValue('secondaryTextColor'),
      disabled: getCssValue('disabledTextColor'),
      hint: getCssValue('hintTextColor'),
      icon: getCssValue('iconTextColor')
    },
    grey: {
      0: getCssValue('grey0'),
      50: getCssValue('grey50'),
      100: getCssValue('grey100'),
      200: getCssValue('grey200'),
      300: getCssValue('grey300'),
      400: getCssValue('grey400'),
      500: getCssValue('grey500'),
      600: getCssValue('grey600'),
      700: getCssValue('grey700'),
      800: getCssValue('grey800'),
      900: getCssValue('grey900'),
      A100: getCssValue('greyA100'),
      A200: getCssValue('greyA200'),
      A400: getCssValue('greyA400'),
      A700: getCssValue('greyA700')
    },
    divider: getCssValue('dividerColor'),
    action: {
      active: getCssValue('actionColorActive'),
      hover: getCssValue('actionColorHover'),
      selected: getCssValue('actionColorSelected'),
      disabled: getCssValue('actionColorDisabled'),
      disabledBackground: getCssValue('actionColorDisabledBackground'),
      focus: getCssValue('actionColorFocus'),
      ghost: getCssValue('actionColorGhost'),
      hoverGhost: getCssValue('actionColorHoverGhost')
    },
    border: {
      main: getCssValue('borderMainColor'),
      disabled: getCssValue('borderDisabledColor'),
      ghost: getCssValue('borderGhostColor'),
      ghostDisabled: getCssValue('borderGhostDisabledColor')
    },
    background: {
      default: getCssValue('defaultBackgroundColor'),
      paper: getCssValue('paperBackgroundColor'),
      selected: '#F5FAFF'
    }
  }
}

const makeOverrides = theme => ({
  MuiOutlinedInput: {
    root: {
      '&$disabled': {
        background: theme.palette.grey[100]
      },
      '&$focused $notchedOutline': {
        borderWidth: '0.0625rem'
      },
      '&:hover $notchedOutline': {
        borderColor: theme.palette.grey[300]
      }
    },
    notchedOutline: {
      borderColor: theme.palette.grey[200]
    }
  },
  MuiButton: {
    root: {
      height: '2.5rem',
      padding: '0px 1rem'
    },
    sizeSmall: {
      height: '2rem',
      padding: '0px 0.75rem'
    },
    sizeLarge: {
      padding: '0px 1.25rem',
      height: '3rem'
    },
    outlined: {
      borderRadius: 2,
      minWidth: 112
    },
    contained: {
      borderRadius: 2,
      boxShadow: 0,
      minWidth: 112
    },
    containedSecondary: {
      color: 'white'
    }
  },
  MuiTab: {
    // This overrides the disabled color of the MuiTab
    textColorPrimary: {
      color: theme.palette.grey[500]
    },
    textColorSecondary: {
      color: theme.palette.grey[500]
    },
    root: {
      fontSize: theme.typography.subtitle1.fontSize,
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.subtitle1.fontSize
      }
    }
  },
  MuiAccordion: {
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    root: {
      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
      borderWidth: '0.0625rem',
      borderStyle: 'solid',
      borderColor: theme.palette.grey[200],
      overflow: 'hidden',
      marginBottom: '1rem'
    }
  },
  MuiAccordionSummary: {
    expanded: {},
    root: {
      backgroundColor: theme.palette.grey[100],
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '0.875rem',
      minHeight: '3.5rem',
      padding: 0,
      color: theme.palette.text.primary,
      '&$expanded': {
        minHeight: '3.5rem'
      }
    },
    expandIcon: {
      order: 0,
      '&&': {
        marginLeft: '0.3125rem'
      },
      transform: 'rotate(-90deg)',
      '&$expanded': {
        marginLeft: '0.3125rem',
        transform: 'rotate(0)'
      }
    },
    content: {
      margin: '0.75rem 0',
      paddingLeft: '0.5rem',
      paddingRight: '0.25rem',
      order: 1,
      '& > :last-child': {
        paddingRight: 0
      },
      '&$expanded': {
        margin: '0.75rem 0'
      }
    }
  },
  MuiAccordionDetails: {
    root: {
      padding: 0,
      borderTop: `0.0625rem solid ${theme.palette.grey[200]}`
    }
  },
  MuiStepConnector: {
    line: {
      borderColor: theme.palette.grey[300]
    }
  },
  MuiList: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  MuiListItemIcon: {
    root: {
      minWidth: 'auto',
      marginRight: '1rem',
      padding: 0,
      width: 32,
      justifyContent: 'center'
    }
  },
  MuiListItem: {
    root: {
      paddingTop: 0,
      paddingBottom: 0,
      minHeight: '3.5rem'
    },
    gutters: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      [theme.breakpoints.up('md')]: {
        '&.listItem--dialog': {
          paddingLeft: '2rem',
          paddingRight: '2rem'
        }
      }
    },
    dense: {
      minHeight: '3.5rem',
      paddingTop: 0,
      paddingBottom: 0
    },
    secondaryAction: {
      paddingRight: '2rem'
    },
    button: {
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.background.selected
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[100]
      },
      '&:focus': {
        backgroundColor: theme.palette.grey[100]
      }
    }
  },
  MuiListItemText: {
    root: {
      padding: '14px 0'
    },
    dense: {
      fontSize: null
    },
    primary: {
      '&$dense': {
        fontSize: null
      }
    },
    secondary: {
      '&$dense': {
        fontSize: null
      }
    },
    multiline: {
      marginTop: 0,
      marginBottom: 0
    }
  },
  MuiListSubheader: {
    root: {
      borderTop: '1px solid transparent',
      borderBottom: '1px solid transparent',
      marginBottom: '-1px',
      padding: 0,
      height: '2rem',
      backgroundColor: theme.palette.background.default,
      textIndent: '2rem',
      fontWeight: 'bold',
      fontSize: '.75rem',
      textTransform: 'uppercase',
      alignItems: 'center',
      display: 'flex',
      lineHeight: 1.33,
      color: theme.palette.text.secondary
    },
    gutters: {
      paddingLeft: 0,
      paddingRight: 0
    },
    sticky: {
      backgroundColor: theme.palette.background.default
    }
  },
  MuiListItemSecondaryAction: {
    root: {
      zIndex: 1,
      right: 0
    }
  },
  MuiMenuItem: {
    root: {
      minHeight: 'auto',
      paddingTop: 4,
      paddingBottom: 4,
      color: theme.palette.grey[800],
      border: 0,
      '&:last-child': {
        borderBottom: 0
      }
    },
    gutters: {
      paddingLeft: 24,
      paddingRight: 24
    }
  },
  MuiTextField: {
    borderWidth: '0.0625rem'
  },
  MuiFormLabel: {
    root: {
      color: theme.palette.text.secondary
    }
  },
  MuiFormHelperText: {
    root: {
      fontStyle: 'italic',
      fontSize: '0.875rem',
      marginTop: 4
    }
  },
  MuiDialog: {
    paper: {
      '&.small': {
        width: '480px',
        maxWidth: '480px',
        [theme.breakpoints.down('md')]: {
          margin: '16px',
          padding: '0 8px 8px',
          height: 'auto',
          maxHeight: 'calc(100% - 32px)',
          borderRadius: '6px'
        }
      },
      '&.medium': {
        [theme.breakpoints.up('md')]: {
          width: '544px',
          maxWidth: '544px'
        }
      },
      '&.large': {
        [theme.breakpoints.up('md')]: {
          width: '800px',
          maxWidth: '800px'
        }
      }
    },
    scrollPaper: {
      '&.alignTop': {
        alignItems: 'start'
      }
    },
    paperFullScreen: {
      '& .cozyDialogActions': {
        paddingBottom: 'env(safe-area-inset-bottom)'
      }
    }
  },
  MuiDialogTitle: {
    root: {
      ...theme.typography.h3,
      boxSizing: 'border-box',
      width: '100%',
      padding: '1.5rem 2rem',
      [theme.breakpoints.down('sm')]: {
        ...theme.typography.h4,
        padding: '0.75rem 1rem'
      },
      '&.dialogTitleWithBack': {
        paddingLeft: '4rem', // padding base (2rem) + buttonWidth (1rem) + buttonMargin (1rem)
        [theme.breakpoints.down('sm')]: {
          paddingLeft: '3rem' // padding base (1rem) + buttonWidth (1rem) + buttonMargin (1rem)
        }
      },
      '&.dialogTitleWithClose': {
        paddingRight: '4rem', // padding base (2rem) + buttonWidth (1rem) + buttonMargin (1rem)
        [theme.breakpoints.down('sm')]: {
          paddingRight: '3rem' // padding base (1rem) + buttonWidth (1rem) + buttonMargin (1rem)
        }
      },
      '&.dialogTitleFluid': {
        paddingTop: 0
      }
    }
  },
  MuiDialogContent: {
    root: {
      padding: '24px 32px 0',
      [theme.breakpoints.down('sm')]: {
        padding: '24px 16px 0'
      },
      '& .dialogContentInner': {
        marginBottom: '24px',
        '&.withFluidActions': {
          [theme.breakpoints.down('sm')]: {
            marginBottom: '16px'
          }
        },
        '& .dialogTitleFluidContainer': {
          marginLeft: '-2rem',
          marginRight: '-2rem',
          [theme.breakpoints.down('sm')]: {
            marginLeft: '-1rem',
            marginRight: '-1rem',
            marginTop: '-0.75rem'
          }
        }
      }
    }
  },
  MuiDialogActions: {
    root: {
      margin: '16px 32px',
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        margin: '8px 16px',
        '& button': {
          flexGrow: 1
        }
      },
      '&.dialogActionsFluid': {
        margin: '24px 0 0'
      },
      '&.columnLayout': {
        display: 'flex',
        flexDirection: 'column-reverse',
        '& button': {
          width: '100%',
          margin: 0,
          '&:not(:first-child)': {
            marginBottom: '8px'
          }
        }
      },

      // To keep muiV3 behavior
      // TODO check later if we need this behavior
      '& > :not(:first-child):not(:first-child)': {
        marginLeft: 4
      }
    }
  },
  MuiDivider: {
    inset: {
      marginLeft: 64,
      '&.divider--dialog': {
        marginLeft: 80
      }
    }
  },
  MuiSwitch: {
    checked: {
      '& + $track$track': {
        opacity: 1
      }
    },
    switchBase: {
      top: 1,
      '&$checked': {
        transform: 'translateX(15px)'
      }
    },
    thumb: {
      width: 16,
      height: 16
    },
    track: {
      width: SWITCH_BAR_WIDTH,
      height: 12,
      opacity: 1,
      backgroundColor: getCssVariableValue('disabledTextColor')
    },
    colorPrimary: {
      '&$checked': {
        color: getCssVariableValue('primaryContrastTextColor')
      }
    },
    colorSecondary: {
      '&$checked': {
        '& + $track': {
          backgroundColor: getCssVariableValue('successColor')
        },
        color: getCssVariableValue('primaryContrastTextColor')
      }
    },
    disabled: {
      '&$checked + $track': {
        backgroundColor: `${theme.palette.grey[200]} !important`
      },
      '& $thumb': {
        backgroundColor: 'white'
      }
    }
  },
  MuiTooltip: {
    tooltip: {
      // TODO should be grey[700] when grey[700] is supported
      backgroundColor: theme.palette.grey[800],
      borderRadius: '8px',
      fontSize: '1rem',
      color: 'white',
      lineHeight: '1.3',
      padding: '16px'
    },
    arrow: {
      // TODO should be grey[700] when grey[700] is supported
      color: theme.palette.grey[800]
    },
    popper: {
      opacity: 0.9
    }
  },
  MuiIconButton: {
    root: {
      color: theme.palette.text.secondary,
      '&.dialogIconButton': {
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
          backgroundColor: theme.palette.background.selected
        }
      }
    }
  },
  MuiBadge: {
    badge: {
      padding: 0
    },
    dot: {
      borderRadius: '100%',
      padding: 0
    }
  }
})

const makeInvertedOverrides = invertedTheme => {
  const invertedOverrides = {
    ...makeOverrides(invertedTheme),
    MuiOutlinedInput: {
      root: {
        boxSizing: 'border-box',
        '&$focused $notchedOutline': {
          borderColor: invertedTheme.palette.text.primary,
          borderWidth: '0.0625rem'
        },
        '& $notchedOutline': {
          borderColor: invertedTheme.palette.text.primary
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: invertedTheme.palette.text.primary
        }
      }
    },
    MuiTab: {
      root: {
        color: 'rgb(255,255,255) !important'
      },
      // This overrides the disabled color of the MuiTab
      textColorPrimary: {
        color: 'rgb(255,255,255) !important',
        opacity: 0.64
      },
      textColorSecondary: {
        color: 'rgb(255,255,255)',
        opacity: 0.64
      },
      selected: {
        opacity: 1
      }
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: 'rgba(255,255,255,0.2)'
      },
      colorSecondary: {
        backgroundColor: 'rgba(255,255,255,0.2)'
      }
    },
    MuiListItem: {
      button: {
        '&$selected, &$selected:hover': {
          backgroundColor: invertedTheme.palette.background.selected
        },
        '&:hover': {
          backgroundColor: invertedTheme.palette.background.selected
        },
        '&:focus': {
          backgroundColor: invertedTheme.palette.background.selected
        }
      }
    },
    MuiCheckbox: {
      colorPrimary: {
        '&.Mui-checked:not(.Mui-disabled)': {
          color: invertedTheme.palette.success.main
        }
      },
      colorSecondary: {
        '&.Mui-checked:not(.Mui-disabled)': {
          color: invertedTheme.palette.error.main
        }
      }
    }
  }

  invertedOverrides.MuiSwitch = {
    ...invertedOverrides.MuiSwitch,
    switchBase: {
      ...invertedOverrides.MuiSwitch.switchBase,
      color: getCssVariableValue('primaryContrastTextColor')
    },
    colorPrimary: {
      '&$checked': {
        '& + $track': {
          boxSizing: 'border-box',
          backgroundColor: '#34CE68'
        }
      }
    }
  }

  return invertedOverrides
}

const makeShadows = () => [
  'none',
  'rgba(29, 33, 42, 0.08) 0px 2px 4px 0px, rgba(29, 33, 42, 0.06) 0px 4px 16px 0px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.08) 0px 3px 5px 0px, rgba(29, 33, 42, 0.06) 0px 4px 17px 0px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.09) 0px 4px 6px 0px, rgba(29, 33, 42, 0.07) 0px 5px 19px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.09) 0px 5px 8px 1px, rgba(29, 33, 42, 0.07) 0px 5px 20px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.09) 0px 6px 9px 1px, rgba(29, 33, 42, 0.07) 0px 5px 22px 1px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.1) 0px 7px 10px 1px, rgba(29, 33, 42, 0.07) 0px 6px 23px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.1) 0px 8px 11px 1px, rgba(29, 33, 42, 0.08) 0px 6px 24px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.1) 0px 9px 13px 1px, rgba(29, 33, 42, 0.08) 0px 6px 26px 2px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.11) 0px 10px 14px 1px, rgba(29, 33, 42, 0.08) 0px 7px 27px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.11) 0px 11px 15px 2px, rgba(29, 33, 42, 0.08) 0px 7px 29px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.11) 0px 12px 16px 2px, rgba(29, 33, 42, 0.09) 0px 7px 30px 3px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.12) 0px 13px 17px 2px, rgba(29, 33, 42, 0.09) 0px 8px 31px 4px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.12) 0px 13px 19px 2px, rgba(29, 33, 42, 0.09) 0px 8px 33px 4px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.13) 0px 14px 20px 2px, rgba(29, 33, 42, 0.09) 0px 9px 34px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.13) 0px 15px 21px 2px, rgba(29, 33, 42, 0.1) 0px 9px 35px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.13) 0px 16px 22px 3px, rgba(29, 33, 42, 0.1) 0px 9px 37px 5px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.14) 0px 17px 23px 3px, rgba(29, 33, 42, 0.1) 0px 10px 38px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.14) 0px 18px 25px 3px, rgba(29, 33, 42, 0.1) 0px 10px 40px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.14) 0px 19px 26px 3px, rgba(29, 33, 42, 0.11) 0px 10px 41px 6px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.15) 0px 20px 27px 3px, rgba(29, 33, 42, 0.11) 0px 11px 42px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.15) 0px 21px 28px 3px, rgba(29, 33, 42, 0.11) 0px 11px 44px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.15) 0px 22px 30px 4px, rgba(29, 33, 42, 0.11) 0px 11px 45px 7px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.16) 0px 23px 31px 4px, rgba(29, 33, 42, 0.12) 0px 12px 47px 8px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px',
  'rgba(29, 33, 42, 0.16) 0px 24px 32px 4px, rgba(29, 33, 42, 0.12) 0px 12px 48px 8px, rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px'
]

const makeThemeOverrides = theme => {
  const createOverrides =
    theme.palette.type === 'dark' ? makeInvertedOverrides : makeOverrides

  return createOverrides(theme)
}

export const makeTheme = type => {
  const palette = makePalette(type)
  const theme = createMuiTheme({
    ...themesCommonConfig,
    typography: makeTypography(palette),
    palette,
    shadows: makeShadows()
  })
  const overrides = makeThemeOverrides(theme)

  return {
    ...theme,
    overrides
  }
}
