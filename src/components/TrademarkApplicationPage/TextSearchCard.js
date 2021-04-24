import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import TrademarkAppSearchBar from '../TrademarkAppSearchBar';
import TextSearchResultCard from './TextSearchResultCard';

const TextSearchCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.searchCard}>
            <p style={{ color: 'red', fontSize: 15 }}>
                Enter your trademark text
            </p>
            <TrademarkAppSearchBar />

            <Alert severity="info" className={classes.alert}>
                A Trademark cannot be 'primarily merely a surname'
            </Alert>

            {/* ======================================== */}
            {/* Text Search Result card */}
            {/* ======================================== */}
            <TextSearchResultCard />
        </Card>
    );
};

export default TextSearchCard;
const useStyles = makeStyles((theme) => ({
    searchCard: {
        width: '75%',
        margin: 'auto',
        marginBottom: '3%',
    },
    alert: {
        width: '80%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
