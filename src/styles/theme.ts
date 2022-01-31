import { createTheme } from '@material-ui/core/styles';
import { MuiButton } from './overrides/MuiButton';
import { palette } from './palette';

export const theme = createTheme({
  palette,
  overrides: {
    MuiButton,
  },
  props: {
    MuiButton: {
      disableRipple: true,
      disableElevation: true,
    },
  },
});
