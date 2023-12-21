import { createTheme } from '@mui/material/styles'
import { blue, red, teal, amber, grey, purple } from '@mui/material/colors'
import inter from './inter'

let theme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1500,
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: grey[900],
      },
      secondary: {
        main: purple[400],
      },
      info: {
        main: blue[600],
      },
      success: {
        main: teal[500],
      },
      error: {
        main: red[600],
      },
      warning: {
        main: amber[700],
      },
      divider: 'rgba(0,0,0,0.12)',
      background: {
        default: '#fff',
        paper: '#fff',
      },
      text: {
        primary: 'rgba(0,0,0,0.87)',
        secondary: 'rgba(0,0,0,0.6)',
      },
    },
    typography: {
      fontFamily: inter.style.fontFamily,
    },
    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  }
)

theme = {
  ...theme,
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          ':-webkit-autofill': {
            WebkitBoxShadow: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          ':-webkit-autofill': {
            WebkitBoxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderColor: 'rgba(0,0,0,0.12)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0,0,0,0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15),rgba(255,255,255,0.15))',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          columnGap: '24px',
        },
        indicator: {
          transition: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: 0,
          paddingLeft: '4px',
          paddingRight: '4px',
          [theme.breakpoints.up('md')]: {
            minWidth: 0,
            paddingLeft: '4px',
            paddingRight: '4px',
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          fontSize: 24,
          fontWeight: theme.typography.fontWeightLight,
          color: 'rgba(0,0,0,0.12)',
          marginLeft: '16px',
          marginRight: '16px',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: '12px',
          '& svg': {
            fontSize: 16,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 500,
        },
        h6: {
          fontWeight: 500,
        },
        subtitle1: {
          fontWeight: 500,
        },
        subtitle2: {
          fontWeight: 500,
        },
      },
    },
  },
}

const lightTheme = theme

export default lightTheme
