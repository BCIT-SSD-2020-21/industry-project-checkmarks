import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AskALawyer from '../components/AskALawyer';
import Logo2 from '../assets/images/CheckmarksLogo2.png';
import CountryCard from '../components/TrademarkApplicationPage/CountryCard';
import ConfirmOrder from '../components/TrademarkApplicationPage/ConfirmOrder';
import PaymentForm from '../components/TrademarkApplicationPage/PaymentForm';
import TrademarkForm from '../components/TrademarkApplicationPage/TrademarkForm';
import GoodsAndServices from '../components/TrademarkApplicationPage/GoodsAndServices';
import { useStep } from 'react-hooks-helper';
import Success from '../components/TrademarkApplicationPage/Success';

const TrademarkApplication = () => {
    const classes = useStyles();

    //Give each step an id
    const steps = [
        { id: 'Trademark-Type' },
        { id: 'Goods-and-Services' },
        { id: 'International-Information' },
        { id: 'Confirmation' },
        { id: 'Payment' },
        { id: 'Success' },
    ];

    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    console.log(step);
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <img src={Logo2} alt="Logo" />
            </div>
            <AskALawyer />
            <div className={classes.title}>
                <span className={classes.text}>Trademark Application</span>
            </div>

            {(() => {
                switch (step.id) {
                    case 'Trademark-Type':
                        return <TrademarkForm navigation={navigation} />;
                    case 'Goods-and-Services':
                        return <GoodsAndServices navigation={navigation} />;
                    case 'International-Information':
                        return <CountryCard navigation={navigation} />;
                    case 'Confirmation':
                        return <ConfirmOrder navigation={navigation} />;
                    case 'Payment':
                        return <PaymentForm navigation={navigation} />;
                    case 'Success':
                        return <Success navigation={navigation} />;
                }
            })()}

            {/* <TrademarkForm />
            <GoodsAndServices />
            <CountryCard />
            <ConfirmOrder />
            <PaymentForm /> */}
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
