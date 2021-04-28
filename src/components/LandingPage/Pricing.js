import React from 'react';


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
              </Grid>
              <Grid item xs={12} md={4}>
              </Grid>
              <Grid item xs={12} md={4}>
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