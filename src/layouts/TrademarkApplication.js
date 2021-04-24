import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AskALawyer from '../components/AskALawyer';
import Card from '@material-ui/core/Card';
import Logo2 from '../images/CheckmarksLogo2.png';
import Alert from '@material-ui/lab/Alert';
import CountryCard from '../components/TrademarkApplicationPage/CountryCard';
import ConfirmOrder from '../components/TrademarkApplicationPage/ConfirmOrder';
import PaymentForm from '../components/TrademarkApplicationPage/PaymentForm';
import DetailSelectForm from '../components/TrademarkApplicationPage/DetailSelectCard';
import LogoForm from '../components/TrademarkApplicationPage/LogoForm';
import TextSearchForm from '../components/TrademarkApplicationPage/TextSearchCard';

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

            {/*Trademark Form Card*/}

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
