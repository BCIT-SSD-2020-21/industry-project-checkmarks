import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import DesignCard from './DesignCard';
import DetailSelectCard from './DetailSelectCard';
import TextSearchCard from './TrademarkTextCard';
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
                <p style={{ color: 'red', fontSize: 15 }}>
                    Select all that apply
                </p>
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

            <button
                className={classes.nextButton}
                onClick={() => navigation.next()}
            >
                Next Step
            </button>
        </Card>
    );
};

export default TrademarkForm;
const useStyles = makeStyles((theme) => ({
    outerCard: {
        width: '75%',
        margin: '3%',
        display: 'flex',
        padding: '0 2% ',
        flexDirection: 'column',
    },
    title: {
        color: '#df3a48',
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
        width: '20%',
        height: '30px',
        fontWeight: 'bold',
        margin: '3%',

        borderRadius: '30px',
        marginBottom: '5%',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '20%',
        },
    },
}));
