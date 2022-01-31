import { Button } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import { useStyles } from './BasicButtonStyles';

type Variants = {
  [key: string]: 'contained' | 'outlined';
};

const variantsMap: Variants = {
  primary: 'contained',
  secondary: 'outlined',
};

interface BasicButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  subline?: string;
  inverted?: boolean;
  disabled?: boolean;
}

export const BasicButton: React.FC<BasicButtonProps> = ({
  label,
  variant = 'primary',
  subline,
  inverted = false,
  disabled = false,
}) => {
  const classes = useStyles();
  return (
    <Button variant={variantsMap[variant]} disabled={disabled}>
      <div
        className={`${classes.labelWrapper} ${
          inverted && classes.reverse
        }`}
      >
        <div className={classes.label}>
          <div>{label}</div>
          {subline && (
            <div className={classes.subline}>{subline}</div>
          )}
        </div>
        <div className={classes.icon}>
          {inverted ? <ArrowBack /> : <ArrowForward />}
        </div>
      </div>
    </Button>
  );
};
