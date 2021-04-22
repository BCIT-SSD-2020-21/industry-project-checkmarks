import React, { useState } from 'react';
import logo from '../images/checkmark logo.PNG';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import { Typography, Tabs, Tab, Card } from '@material-ui/core';
import IndividualForm from '../components/RegisterPage/IndividualForm';
import OrganizationForm from '../components/RegisterPage/OrganizationForm';

export default function Register() {
  const classes = useStyles();
  const [errorMsgs, setErrorMsgs] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  //handle tab
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  // Handle errors function
  const handleErrors = () => {
    let tempArr = [];

    //Password length validation;
    if (user.password.length < 8) {
      tempArr.push('Password needs to be a minimum of 8 characters');
    }

    // Uppercase validation
    let upperCase = new RegExp(/^(?=.*[A-Z])/);
    if (!upperCase.test(user.password)) {
      tempArr.push('Password needs an UPPERCASE letter');
    }

    //Lowercase validation
    let lowerCase = new RegExp(/^(?=.*[a-z])/);
    if (!lowerCase.test(user.password)) {
      tempArr.push('Password needs an lowercase letter');
    }
    //Number validation
    let digits = new RegExp(/^(?=.*[0-9])/);
    if (!digits.test(user.password)) {
      tempArr.push('Password needs to include a number');
    }
    //Special character validaton
    let special = new RegExp(/^(?=.*?[#?!@$%^&*-])/);
    if (!special.test(user.password)) {
      tempArr.push('Password needs to include a special character');
    }

    //Password match validation
    if (user.password !== user.confirmPassword) {
      tempArr.push('Password & Confirm Password does not match');
    }

    return tempArr;
  };

  return (
    <div className={classes.root}>
      <div className={classes.lawyerText}>
        <HelpIcon /> <span className={classes.text}>Ask a lawyer</span>
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <Typography className={classes.title}>Sign up</Typography>
      <Card>
        <Typography className={classes.question}>
          Are you registering as an individual or representing an organization?
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
            /////////////////////////////// Login /////////////////////////////////////////////
            <IndividualForm
              user={user}
              setUser={setUser}
              handleErrors={handleErrors}
              setErrorMsgs={setErrorMsgs}
            />
          ) : (
            /////////////////////////////// Register ////////////////////////////////////////////
            <OrganizationForm
              user={user}
              setUser={setUser}
              handleErrors={handleErrors}
              errorMsgs={errorMsgs}
              setErrorMsgs={setErrorMsgs}
            />
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
  text: {
    marginLeft: '5px',
  },
  title: {
    margin: '5%',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#df3a48',
  },
  question: {
    marginTop: '5%',
    fontSize: '15px',
    textAlign: 'center',
  },
}));
