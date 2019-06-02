import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#f1c232',
    },
    secondary: {
      main: '#DC96FF',
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
