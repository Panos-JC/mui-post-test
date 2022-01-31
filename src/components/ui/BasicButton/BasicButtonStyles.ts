import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  labelWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  reverse: { flexDirection: 'row-reverse' },
  label: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    lineHeight: 1,
    textAlign: 'left',
  },
  icon: {
    display: 'flex',
    '& svg': {
      alignSelf: 'flex-end',
    },
  },
  subline: {
    fontWeight: 400,
  },
}));
