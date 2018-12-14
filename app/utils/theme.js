import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    h4: {
      textAlign: 'center',
    },
  },
  palette: {
    type: 'light',
    primary: {
      light: '#F1F1F1',
      main: '#262626',
      dark: '#171717',
      contrastText: '#F1F1F1',
    },
    secondary: {
      light: '',
      main: '#CF3141',
      dark: '',
      contrastText: '#ffffff',
    },
  },
  themeName: 'Ultrahack theme',
  shadows: ['none'],
  overrides: {
    MuiPaper: {},
    MuiAppBar: {},
  },
});
