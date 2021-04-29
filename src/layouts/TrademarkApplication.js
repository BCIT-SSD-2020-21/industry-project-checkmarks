import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo2 from '../assets/images/CheckmarksLogo2.png';
import Progress from '../components/TrademarkApplicationPage/Progress';
import CountryCard from '../components/TrademarkApplicationPage/CountryCard';
import ConfirmOrder from '../components/TrademarkApplicationPage/ConfirmOrder';
import PaymentForm from '../components/TrademarkApplicationPage/PaymentForm';
import TrademarkForm from '../components/TrademarkApplicationPage/TrademarkType/index';
import GoodsAndServices from '../components/TrademarkApplicationPage/GoodsAndServices';
import { useStep } from 'react-hooks-helper';
import Success from '../components/TrademarkApplicationPage/Success';
import ApplicationInfo from '../components/TrademarkApplicationPage/ApplicationInfo/index';

const TrademarkApplication = () => {
    const classes = useStyles();

    const [info, setInfo] = useState({
        //Application Informarion
        individualOrOrganization: '',
        firstName: '',
        lastName: '',
        organizationName: '',
        email: '',
        userStreetAddress: '',
        userCity: '',
        userProvince: '',
        userPostalCode: '',
        userCountry: '',

        //Trademark Type
        isText: false,
        isLogo: false,
        isOther: false,
        OtherTypes: [],

        characterText: '',
        fileName: '',
        trademarkName: '',

        // Goods and Services
        classesSelected: [],
        termsSelected: [],
        amount: 150000,

        //International Information
        filedInOtherCountry: '',
        countryOfFiling: '',
        fillingDate: '',
        fillingNumber: '',
    });

    //Give each step an id
    const steps = [
        { id: 'Application-Information', num: 1 },
        { id: 'Trademark-Type', num: 2 },
        { id: 'Goods-and-Services', num: 3 },
        { id: 'International-Information', num: 4 },
        { id: 'Confirmation', num: 5 },
        { id: 'Payment', num: 6 },
        { id: 'Success', num: 7 },
    ];

    //use useStep from hook-helper to navigate the steps
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    return (
        <>
            <div className={classes.logo}>
                <img src={Logo2} alt="Logo" />
            </div>
            <Progress step={step} />
            <div className={classes.root}>
                {(() => {
                    switch (step.id) {
                        case 'Application-Information':
                            return (
                                <ApplicationInfo
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            );
                        case 'Trademark-Type':
                            return (
                                <TrademarkForm
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            );
                        case 'Goods-and-Services':
                            return (
                                <GoodsAndServices
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            );
                        case 'International-Information':
                            return (
                                <CountryCard
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            );
                        case 'Confirmation':
                            return (
                                <ConfirmOrder
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            );
                        case 'Payment':
                            return (
                                <PaymentForm
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            );
                        case 'Success':
                            return <Success navigation={navigation} />;
                    }
                })()}
            </div>
        </>
    );
};

export default TrademarkApplication;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
    },

    text: {
        fontSize: 30,
        fontWeight: 500,
    },
}));
