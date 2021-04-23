import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AskALawyer from '../components/AskALawyer';
import Card from '@material-ui/core/Card';
import TrademarkAppSearchBar from '../components/TrademarkAppSearchBar';
import Logo2 from '../images/CheckmarksLogo2.png';
import Alert from '@material-ui/lab/Alert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
            {/* ===================================== */}
            {/*====== Outter Card -- Main  card *==== */}
            {/* ===================================== */}
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
                    <Card className={classes.resultCard}>
                        <p>placeholder</p>
                        <p>placeholder</p>
                        <p>placeholder</p>

                        <div className={classes.resultCardButtons}>
                            <ArrowBackIcon />
                            <ArrowForwardIcon />
                        </div>
                    </Card>
                </Card>

                <Alert severity="info" className={classes.alert}>
                    Helper Section with brief legal information, assisting the
                    client through the process
                </Alert>

                <button className={classes.nextButton}>Next Step</button>
            </Card>
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
        fontWeight: 600,
    },

    outerCard: {
        width: '75%',
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        background: '',
    },

    searchCard: {
        width: '75%',
        boxShadow: '1px 1px 10px 0px grey',
        margin: 'auto',
        marginBottom: '3%',
    },

    nextButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '40%',
        height: '50px',
        margin: '3%',
        borderRadius: '10px',

        margin: 'auto',
    },

    resultCard: {
        width: '75%',
        boxShadow: '1px 1px 10px 0px grey',
        margin: 'auto',
        marginTop: '5%',
        marginBottom: '10%',
    },

    resultHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    outerText: {
        justifyContent: 'flex-start',
    },
    alert: {
        width: '80%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },

    // seeAllButton: {
    //     backgroundColor: '#128b83',
    //     color: '#fff',
    //     borderRadius: '10px',
    //     width: '15%',
    // },

    // uploadCard: {
    //     width: '75%',
    //     marginTop: '2%',
    //     display: 'flex',
    //     boxShadow: '5px 5px 15px 0px grey',
    // },

    // arrowIcons: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: '5%',
    // },
}));
