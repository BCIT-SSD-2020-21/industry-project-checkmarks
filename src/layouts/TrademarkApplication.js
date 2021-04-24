import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AskALawyer from '../components/AskALawyer';
import Card from '@material-ui/core/Card';
import TrademarkAppSearchBar from '../components/TrademarkAppSearchBar';
import Logo2 from '../images/CheckmarksLogo2.png';
import Alert from '@material-ui/lab/Alert';
import CountryCard from '../components/TrademarkApplicationPage/CountryCard';
import ConfirmOrder from '../components/TrademarkApplicationPage/ConfirmOrder';
import PaymentForm from '../components/TrademarkApplicationPage/PaymentForm';
import DetailSelectForm from '../components/TrademarkApplicationPage/DetailSelectForm';
import LogoForm from '../components/TrademarkApplicationPage/LogoForm';
import SearchResultCard from '../components/TrademarkApplicationPage/SearchResultCard';

const TrademarkApplication = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <img src={Logo2} alt="Logo" />
            </div>
            <AskALawyer />
            <div className={classes.title}>
                <span className={classes.text}>Trademark Application</span>
            </div>

            {/*====== Outter Card -- Main  card *==== */}

            <Card className={classes.outerCard}>
                <div className={classes.outerText}>
                    <p style={{ color: 'red' }}>What type of Trademark? </p>
                    <p style={{ color: 'red', fontSize: 15 }}>
                        Select all that apply
                    </p>
                </div>
                {/* ======================================== */}
                {/* Search for trade mark card */}
                {/* ======================================== */}
                <Card className={classes.searchCard}>
                    <p style={{ color: 'red', fontSize: 15 }}>
                        Enter your trademark text
                    </p>
                    <TrademarkAppSearchBar />

                    <Alert severity="info" className={classes.alert}>
                        A Trademark cannot be 'primarily merely a surname'
                    </Alert>

                    {/* ======================================== */}
                    {/* Search Result card */}
                    {/* ======================================== */}
                </Card>

                {/* ======================================== */}
                {/* Logo card */}
                {/* ======================================== */}

                <LogoForm />

                {/* ======================================== */}
                {/* detail selection card */}
                {/* ======================================== */}
                <DetailSelectForm />

                <Alert severity="info" className={classes.alert}>
                    Helper Section with brief legal information, assisting the
                    client through the process
                </Alert>

                <button className={classes.nextButton}>Next Step</button>
            </Card>

            <CountryCard />
            <ConfirmOrder />
            <PaymentForm />
        </div>
    );
};

export default TrademarkApplication;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },

    text: {
        fontSize: 30,
        color: 'red',
        fontWeight: 500,
    },

    outerCard: {
        width: '75%',
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'column',
    },

    searchCard: {
        width: '75%',
        margin: 'auto',
        marginBottom: '3%',
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
}));
