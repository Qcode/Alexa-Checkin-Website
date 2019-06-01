import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#3FA6E1',
    },
    secondary: {
      main: '#CA2E55',
    },
  },
  overrides: {
    MuiSwitch: {
      root: {
        position: 'absolute',
        top: '-1px',
        right: '9px',
      },
    },
  },
});
