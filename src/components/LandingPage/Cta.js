import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(9),
    },
    button: {
        border: '3px solid currentColor',
        borderRadius: 2,
        height: 'auto',
        padding: theme.spacing(2, 5),
      },
      link: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },
  });

  
function CallToAction(props) {
    const { classes } = props;

    return (
        <Container className={classes.root} component="section">
            <Button className={classes.button}>
                <Typography variant="h4" component="span">
                    Registering Your Trademark? Need Assistance?
                </Typography>
            </Button>
            <Typography variant="subtitle1" className={classes.link}>
                We are here to help you. Get in touch!
            </Typography>
        </Container>
    );
}
