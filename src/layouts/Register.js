import React, { useState } from 'react';
import logo from '../assets/images/logo_checkmarks_vp.svg';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import { Typography, Tabs, Tab, Card } from '@material-ui/core';
import HeaderBanner from '../components/HeaderBanner';
import IndividualForm from '../components/RegisterPage/IndividualForm';
import OrganizationForm from '../components/RegisterPage/OrganizationForm';

export default function Register() {
    const classes = useStyles();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        organizationName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    //handle tab
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (_, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.lawyerText}>
                <HelpIcon /> <span className={classes.text}>Ask a lawyer</span>
            </div>
            <HeaderBanner />
            {/* <div className={classes.logo}>
                <img src={logo} alt="Logo" />
            </div> */}
            <Card className={classes.card}>
                <Typography className={classes.title}>Sign up</Typography>
                <Typography className={classes.question}>
                    Are you registering as an individual or representing an
                    organization?
                </Typography>
                <div className={classes.formContainer}>
                    {/* /////////////////////////////// Tab /////////////////////////////////////////////*/}
                    <Tabs
                        variant="fullWidth"
                        classes={{
                            indicator: classes.indicator,
                        }}
                        className={classes.tabs}
                        value={tabValue}
                        textColor="inherit"
                        onChange={handleTabChange}
                    >
                        <Tab label="Individual" />
                        <Tab label="Organization" />
                    </Tabs>

                    {tabValue === 0 ? (
                        /////////////////////////////// Register for individual /////////////////////////////////////////////
                        <IndividualForm user={user} setUser={setUser} />
                    ) : (
                        /////////////////////////////// Register for organization ////////////////////////////////////////////
                        <OrganizationForm user={user} setUser={setUser} />
                    )}
                </div>
            </Card>
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
    },
    lawyerText: {
        display: 'flex',
        alignItems: 'center',
        color: '#df3a48',
        fontWeight: 'bold',
        position: 'absolute',
        right: 20,
        top: 10,
    },
    logo: {
        marginTop: '15%',
        [theme.breakpoints.up('sm')]: {
            marginTop: '1%',
        },
    },
    card: {
        width: '80%',
        [theme.breakpoints.up('md')]: {
            marginTop: '1%',
            width: '50%',
        },
    },
    formContainer: {
        marginTop: '5%',
    },
    tabs: {
        marginBottom: '5%',
        indicator: {
            backgroundColor: '#df3a48',
        },
    },
    title: {
        margin: '5%',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#df3a48',
        textAlign: 'center',
    },
    question: {
        marginTop: '5%',
        fontSize: '15px',
        textAlign: 'center',
    },
}));
