import { ButtonClassKey, StyleRules } from '@material-ui/core';
import { palette } from '../palette';

export const MuiButton: Partial<StyleRules<ButtonClassKey, {}>> = {
  root: {
    borderRadius: 0,
    textTransform: 'none',
    fontWeight: 700,
  },
  // Styles applied to the text button
  text: {
    color: palette.secondary.main,
    '&:hover': {
      color: palette.secondary.light,
      backgroundColor: 'transparent',
    },
    '&:active': {
      color: palette.secondary.dark,
    },
  },
  // Styles applied to the contained button
  contained: {
    width: 343,
    height: 48,
    padding: 8,
    backgroundColor: palette.secondary.main,
    color: 'white',
    // Label styles
    '& .MuiButton-label': {
      height: '100%',
    },
    '&:active': {
      backgroundColor: palette.secondary.dark,
    },
    '&:hover': {
      backgroundColor: palette.secondary.light,
    },
  },
  outlined: {
    width: 343,
    height: 48,
    padding: 6, // +2px border
    color: palette.secondary.main,
    border: `2px solid ${palette.secondary.main}`,
    '& .MuiButton-label': {
      height: '100%',
    },
    '&:active': {
      color: 'red',
      border: `2px solid ${palette.secondary.dark}`,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: palette.secondary.light,
      border: `2px solid ${palette.secondary.light}`,
    },
    '&.Mui-disabled': {
      border: `2px solid ${palette.action.disabled}`,
    },
  },
};
