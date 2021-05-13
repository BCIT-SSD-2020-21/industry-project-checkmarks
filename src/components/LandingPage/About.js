import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const cards = [1, 2, 3];

export default function About() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Hero unit */}
            <Container
                maxWidth="md"
                component="main"
                className={classes.heroContent}
            >
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    About Us
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    <b>Checkmarks</b> is a service provided by a law firm. As
                    intellectual property lawyers (and a trademark agent), we
                    know that trademarks can be key to the success of a
                    business. For many businesses, their only competitive
                    advantage is their goodwill and their branding. Trademarks
                    can be relatively simple, or be incredibly complex. It is
                    not necessary for you hire an expensive firm to handle a
                    simple trademark application. It also isn’t always a good
                    idea to do you own trademark application if your application
                    is complex. If you’ve never done a trademark application, it
                    may be hard to know if yours is simple or complex. So, we
                    offer a “Do It Yourself+” option, and a “Full-Service”
                    option. This way, you only pay for what you need.
                </Typography>
            </Container>

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    align="center"
                                    component="h2"
                                >
                                    Trademarks + IP
                                </Typography>
                                <Typography align="justify">
                                    {
                                        'Your most important assets – your mark, logo, and slogan help identify your products or services.'
                                    }
                                    {
                                        'They create loyalty by differentiating you from others.'
                                    }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    align="center"
                                    component="h2"
                                >
                                    Business Law
                                </Typography>
                                <Typography align="justify">
                                    {
                                        'Strategic advice + legal insights. Business set-up. Contracts, deals,  transactions'
                                    }
                                    {
                                        'Whether you’re just starting out or an established business, we’re on your team.'
                                    }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    align="center"
                                    component="h2"
                                >
                                    Tech + Software
                                </Typography>
                                <Typography align="justify">
                                    {
                                        'Licensing agreements, SaaS, Ownership of IP, Growth. '
                                    }
                                    {
                                        'We have high level focus on what’s unique about your tech company.'
                                    }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
