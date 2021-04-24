import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AskALawyer from '../components/AskALawyer';
import Logo2 from '../images/CheckmarksLogo2.png';
import CountryCard from '../components/TrademarkApplicationPage/CountryCard';
import ConfirmOrder from '../components/TrademarkApplicationPage/ConfirmOrder';
import PaymentForm from '../components/TrademarkApplicationPage/PaymentForm';
import TrademarkForm from '../components/TrademarkApplicationPage/TrademarkForm';

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

            <TrademarkForm />
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
}));
