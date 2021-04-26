import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <React.Fragment>
            {'© '}
            <Link color="inherit" href="https://material-ui.com/">
                Checkmarks
            </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.secondary.light,
    },
    container: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      display: 'flex',
    },
    iconsWrapper: {
      height: 120,
    },
    icons: {
      display: 'flex',
    },
    icon: {
      width: 32,
      height: 32,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.warning.main,
      marginRight: theme.spacing(1),
      '&:hover': {
        backgroundColor: theme.palette.warning.dark,
      },
    },
    list: {
      margin: 0,
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
  }));

  // FB - Add two more footer section
  

export default function Footer() {
    const classes = useStyles;

    return (
        <Typography component="footer" className={classes.root}> 
            <Container className={classes.container}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Grid
                            container
                            direction="column"
                            justify="flex-end"
                            className={classes.iconsWrapper}
                            spacing={2}
                            >
                            <Grid item className={classes.icons}>
                                <a href="checkmarks.ca/" className={classes.icon}>
                                <img src="../../images/checkmark-logo.png" alt="checkmark-logo" />
                                </a>
                                <a href="https://twitter.com/" className={classes.icon}>
                                <img src="/../../images/twitter.png" alt="twitter" />
                                </a>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}