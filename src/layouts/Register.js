import React from 'react';
import logo from '../images/checkmark logo.PNG';
import { makeStyles } from '@material-ui/core/styles';

export default function Register() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.text}>Ask a lawyer</div>
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
  text: {
    color: 'red',
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  logo: {
    marginTop: '10%',
  },
}));
