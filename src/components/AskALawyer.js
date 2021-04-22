import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';

const AskALawyer = () => {
  const classes = useStyles();

  return (
    <div className={classes.lawyerText}>
      <HelpIcon /> <span className={classes.text}>Ask a lawyer</span>
    </div>
  );
};

export default AskALawyer;

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
}));
