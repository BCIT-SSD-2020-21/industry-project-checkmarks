import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import DesignCard from './DesignCard';
import DetailSelectCard from './DetailSelectCard';
import TextSearchCard from './TrademarkTypeCard';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TrademarkForm = ({ navigation }) => {
    const [textTrademarkChecked, setTextTrademarkChecked] = useState(false);
    const [designChecked, setDesignChecked] = useState(false);
    const [detailChecked, setDetailChecked] = useState(false);

    const classes = useStyles();
    return (
        <Card className={classes.outerCard}>
            <h1 className={classes.title}>Trademark Type</h1>
            <div className={classes.outerText}>
                <Typography className={classes.trademarkMessage}>
                    Please{' '}
                    <span style={{ color: '#df3a48' }}>
                        <strong>select all </strong>{' '}
                    </span>
                    that apply, and provide additional information as you can:
                </Typography>
            </div>
            {/* ======================================== */}
            {/* Text Search Form */}
            {/* ======================================== */}
            <FormControlLabel
                control={<Checkbox />}
                label="Standard Characters"
                onChange={() => setTextTrademarkChecked(!textTrademarkChecked)}
            />
            {textTrademarkChecked === true && <TextSearchCard />}

            {/* ======================================== */}
            {/* Logo card */}
            {/* ======================================== */}
            <FormControlLabel
                control={<Checkbox />}
                label="Logos or Design"
                onChange={() => setDesignChecked(!designChecked)}
            />
            {designChecked === true && <DesignCard />}

            {/* ======================================== */}
            {/* detail selection card */}
            {/* ======================================== */}
            <FormControlLabel
                control={<Checkbox />}
                label="Others "
                onChange={() => setDetailChecked(!detailChecked)}
            />
            {detailChecked === true && <DetailSelectCard />}

            <Alert severity="info" className={classes.alert}>
                Helper Section with brief legal information, assisting the
                client through the process
            </Alert>

            <Button
                className={classes.nextButton}
                onClick={() => navigation.next()}
            >
                Next Step
            </Button>
        </Card>
    );
};

export default TrademarkForm;
const useStyles = makeStyles((theme) => ({
    outerCard: {
        margin: '3%',
        display: 'flex',
        padding: '0 5% 5% 5%',
        flexDirection: 'column',
        width: '70%',
        [theme.breakpoints.up('md')]: {
            width: '60%',
            padding: '0 2% ',
        },
        border: '1px solid #696969',
    },
    title: {
        color: '#df3a48',
    },
    outerText: {
        justifyContent: 'flex-start',
        fontWeight: 550,
    },
    alert: {
        width: '100%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
    nextButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '20%',
        height: '30px',
        fontWeight: 'bold',
        fontSize: '10px',
        borderRadius: '10px',
        margin: ' 2% auto 4% auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
            margin: ' 4% auto 0 auto',
            width: '30%',
        },
    },
    trademarkMessage: {
        marginBottom: '3%',
        fontSize: 17,
    },
}));
