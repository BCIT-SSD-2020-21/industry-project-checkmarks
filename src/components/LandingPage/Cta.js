import React from 'react';


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
