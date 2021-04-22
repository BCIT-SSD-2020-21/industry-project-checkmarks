import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AskALawyer from '../components/AskALawyer';
import Card from '@material-ui/core/Card';
import TrademarkAppSearchBar from '../components/TrademarkAppSearchBar';

const TrademarkApp = () => {
  const classes = useStyles();
  return (
    <div>
      <AskALawyer />
      <div className={classes.title}>
        <span className={classes.text}>Trademark Application</span>
      </div>
      {/* Outter Card -- Main  card */}
      <Card className={classes.outerCard}>
        <div>
          <p style={{ color: 'red' }}>What type of Trademark? </p>
          <p style={{ color: 'red', fontSize: 15 }}>Select all that apply</p>
        </div>
        {/* 1st option card -- Search for trade mark */}
        <Card className={classes.searchCard}>
          <p style={{ color: 'red', fontSize: 15 }}>
            Enter your trademark text
          </p>
          <TrademarkAppSearchBar />
          {/* Sub option card - shows the list of search trademark results */}
          <Card className={classes.resultCard}>
            <div className={classes.resultHeading}>
              <p>Top existing matches found...</p>
              <button>See all</button>
            </div>
          </Card>
        </Card>

        <button className={classes.nextButton}>Next Step</button>
      </Card>
    </div>
  );
};

export default TrademarkApp;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
  },

  text: {
    fontSize: 23,
    color: 'red',
  },

  outerCard: {
    width: '75%',
    marginTop: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '5px 5px 15px 0px grey',
  },

  searchCard: {
    width: '75%',
    boxShadow: '5px 5px 15px 0px grey',
  },
  nextButton: {
    backgroundColor: '#df3a48',
    color: '#FFF',
    width: '40%',
    height: '50px',
    margin: '3%',
    borderRadius: '10px',
  },
}));
