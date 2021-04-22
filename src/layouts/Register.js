import React from 'react';
import logo from '../images/checkmark logo.PNG';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';

export default function Register() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.lawyerText}>
        <HelpIcon /> <span className={classes.text}>Ask a lawyer</span>
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lawyerText: {
    display: 'flex',
    alignItems: 'center',
    color: 'red',
    fontWeight: 'bold',
    position: 'absolute',
    right: 20,
    top: 10,
  },
  logo: {
    marginTop: '20%',
  },
  text: { marginLeft: '5px' },
}));
