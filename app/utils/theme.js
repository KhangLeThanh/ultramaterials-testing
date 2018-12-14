import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    primary: { main: '#424242', contrastText: '#ffffff' },
    secondary: { main: '#D50000', contrastText: '#ffffff' },
  },
  themeName: 'Ultrahack theme',
  shadows: ['none'],
  overrides: {
    MuiPaper: {},
    MuiAppBar: {},
  },
});
