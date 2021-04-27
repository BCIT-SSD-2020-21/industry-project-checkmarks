import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const TrademarkTextCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.resultCard}>
            <div className={classes.resultCardHeading}>
                {' '}
                <p>Top existing matches found...</p>
                <button className={classes.seeAllButton}>See all</button>
            </div>
            <p>placeholder</p>
            <p>placeholder</p>
            <p>placeholder</p>

            <div className={classes.resultCardButtons}>
                <button>
                    <ArrowBackIcon />
                </button>
                <button>
                    <ArrowForwardIcon />
                </button>
            </div>
        </Card>
    );
};

export default TrademarkTextCard;
const useStyles = makeStyles((theme) => ({
    resultCard: {
        width: '75%',
        margin: 'auto',
        marginTop: '5%',
        marginBottom: '10%',
    },
    resultCardHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    seeAllButton: {
        backgroundColor: '#128b83',
        color: '#fff',
        borderRadius: '10px',
        width: '25%',
    },
    resultCardButtons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
