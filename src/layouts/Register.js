import React from 'react';
import logo from '../images/checkmark logo.PNG';
import { makeStyles } from '@material-ui/core/styles';

export default function Register() {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
  },
}));
