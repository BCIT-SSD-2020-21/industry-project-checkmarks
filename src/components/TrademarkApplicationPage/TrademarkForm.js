import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import DesignCard from './DesignCard';
import DetailSelectCard from './DetailSelectCard';
import TextSearchCard from './TextSearchCard';

const TrademarkForm = () => {
    const classes = useStyles();
    return (
        <Card className={classes.outerCard}>
            <div className={classes.outerText}>
                <p style={{ color: 'red' }}>What type of Trademark? </p>
                <p style={{ color: 'red', fontSize: 15 }}>
                    Select all that apply
                </p>
            </div>
            {/* ======================================== */}
            {/* Text Search Form */}
            {/* ======================================== */}

            <TextSearchCard />

            {/* ======================================== */}
            {/* Logo card */}
            {/* ======================================== */}

            <DesignCard />

            {/* ======================================== */}
            {/* detail selection card */}
            {/* ======================================== */}
            <DetailSelectCard />

            <Alert severity="info" className={classes.alert}>
                Helper Section with brief legal information, assisting the
                client through the process
            </Alert>

            <button className={classes.nextButton}>Next Step</button>
        </Card>
    );
};

export default TrademarkForm;
const useStyles = makeStyles((theme) => ({
    outerCard: {
        width: '75%',
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'column',
    },
    outerText: {
        justifyContent: 'flex-start',
        fontWeight: 550,
    },
    alert: {
        width: '80%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
    nextButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '40%',
        height: '50px',
        margin: '3%',
        borderRadius: '30px',
        marginBottom: '5%',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '20%',
        },
    },
}));
