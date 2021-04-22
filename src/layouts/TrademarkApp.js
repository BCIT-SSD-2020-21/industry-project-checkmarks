import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AskALawyer from '../components/AskALawyer';

const TrademarkApp = () => {
  const classes = useStyles();
  return (
    <div>
      <AskALawyer />
      <div className={classes.title}>
        <span className={classes.text}>Trademark Application</span>
      </div>
    </div>
  );
};

export default TrademarkApp;

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
    color: 'red',
  },
}));
