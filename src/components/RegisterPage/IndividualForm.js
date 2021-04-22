import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, Input } from '@material-ui/core';

export default function IndividualForm({
  user,
  setUser,
  handleErrors,
  setErrorMsgs,
}) {
  const classes = useStyles();

  //handle register
  const handleRegister = async (event) => {
    event.preventDefault();
    // Check user input errors before access the database
    const errors = handleErrors();
    if (errors.length > 0) {
      setErrorMsgs(errors);
      setTimeout(() => setErrorMsgs([]), 5000);
      return;
    } else {
      setErrorMsgs([]);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <FormControl fullWidth={true}>
        <input
          className={classes.input}
          placeholder="Name"
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
      </FormControl>
      <FormControl fullWidth={true}>
        <input
          className={classes.input}
          placeholder="Your Location"
          type="text"
          value={user.address}
          autoComplete="on"
          onChange={(e) =>
            setUser({
              ...user,
              address: e.target.value,
            })
          }
        />
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
      <div className={classes.button}>
        <Button
          type="submit"
          variant="outlined"
          className={classes.submitButton}
        >
          Submit
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
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
  },
  submitButton: {
    color: '#FFF',
    fontWeight: 'bold',
    borderRadius: '20px',
    fontSize: '10px',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
}));
