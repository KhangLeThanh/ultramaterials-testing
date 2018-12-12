import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#424242', contrastText: '#ffffff' },
  secondary: { main: '#D50000', contrastText: '#ffffff' },
};
const themeName = 'Tundora Guardsman Red Xerus';
const typography = { useNextVariants: true };
const status = { danger: 'orange' };

export default createMuiTheme({ palette, themeName, typography, status });
