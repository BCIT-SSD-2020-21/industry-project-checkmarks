import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export default function IndividualForm({ user, setUser }) {
  const classes = useStyles();

  //handle register as individual
  const handleRegister = async (event) => {
    event.preventDefault();
    alert('Successfully register');
  };

  return (
    <form onSubmit={handleRegister}>
      <FormControl fullWidth={true}>
        <input
          className={classes.input}
          placeholder="First Name"
          type="text"
          value={user.name}
          autoComplete="on"
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
      </FormControl>
      <FormControl fullWidth={true}>
        <input
          className={classes.input}
          placeholder="Last Name"
          type="text"
          value={user.name}
          autoComplete="on"
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
      </FormControl>
      <FormControl fullWidth={true}>
        <input
          className={classes.input}
          placeholder="Email"
          type="email"
          value={user.email}
          autoComplete="on"
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
        <div className={classes.uploadButtonContainer}>
          <Button
            type="submit"
            variant="contained"
            className={classes.uploadButton}
          >
            Upload ID Document
          </Button>
        </div>
      </FormControl>
      <FormControl fullWidth={true}>
        <input
          className={classes.input}
          placeholder="Password"
          type="password"
          value={user.password}
          autoComplete="on"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
      </FormControl>
      <FormControl fullWidth={true}>
        <input
          className={classes.input}
          placeholder="Confirm Password"
          type="password"
          value={user.confirmPassword}
          autoComplete="on"
          onChange={(e) =>
            setUser({
              ...user,
              confirmPassword: e.target.value,
            })
          }
        />
      </FormControl>
      <Alert severity="info" className={classes.alert}>
        Helper section with brief legal information, assisting the client
        through the process.
      </Alert>
      <div className={classes.submitButtonContainer}>
        <Button
          type="submit"
          variant="contained"
          className={classes.haveAccountButton}
        >
          I already have an account
        </Button>
        <Button
          type="submit"
          variant="contained"
          className={classes.submitButton}
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    width: '60%',
    margin: '3% auto',
    padding: '3%',
    border: 'none',
    borderRadius: '10px',
    '&:focus': {
      outline: 'none',
    },
    border: '1px solid #ccc',
  },
  uploadButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
  },
  uploadButton: {
    backgroundColor: '#df3a48',
    color: '#FFF',
    width: '70%',
    height: '50px',
    borderRadius: '10px',
    fontSize: '10px',
  },
  submitButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
  },
  submitButton: {
    backgroundColor: '#df3a48',
    color: '#FFF',
    width: '20%',
    width: '40%',
    height: '50px',
    margin: '3%',
    borderRadius: '10px',
  },
  haveAccountButton: {
    color: '#df3a48',
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    width: '40%',
    height: '50px',
    fontSize: '10px',
    margin: '3%',
    borderRadius: '10px',
    border: '1px solid #df3a48',
  },
  alert: {
    width: '80%',
    margin: '2% auto',
    color: '#2a9df4',
    fontSize: '12px',
  },
}));
