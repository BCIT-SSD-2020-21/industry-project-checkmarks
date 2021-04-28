import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.secondary.light,
        overflow: 'hidden',
      },
      container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
      },
      title: {
        marginBottom: theme.spacing(14),
      },
      number: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,
      },
    });

function Pricing(props) {
    const { classes } = props;
  
    return (
      <section className={classes.root}>
        <Container className={classes.container}>
          <Typography variant="h4" marked="center" className={classes.title} component="h2">
            Pricing
          </Typography>
          <div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Basic Licence</div>
                <Typography variant="h5" align="center">
                Lorem ipsum dolor sit amet
                </Typography>
              </div>
              </Grid>
              <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Standart Licence</div>
                <Typography variant="h5" align="center">
                Lorem ipsum dolor sit amet
                </Typography>
              </div>
              </Grid>
              <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Premium Licence</div>
                <Typography variant="h5" align="center">
                Lorem ipsum dolor sit amet
                </Typography>
              </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    );
  }
  
  Pricing.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Pricing);