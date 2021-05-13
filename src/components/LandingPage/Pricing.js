import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { checkmarksTheme } from '../../styles/Themes';

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
    button: {
        backgroundColor:
            theme.palette.type === 'dark'
                ? checkmarksTheme.bgCardHeader
                : checkmarksTheme.bgCardHeader1,
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'dark'
                ? checkmarksTheme.bgCardHeader
                : checkmarksTheme.bgCardHeader1,
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(6),
    },
}));

const tiers = [
    {
        title: 'DIY Package',
        price: '...',
        description: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
        ],
        buttonText: 'Get Started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise Package',
        price: '...',
        description: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
        ],
        buttonText: 'Get Started',
        buttonVariant: 'contained',
    },
];

export default function Pricing() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Hero unit */}
            <Container
                maxWidth="sm"
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
                    Pricing
                </Typography>
                {/* <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography> */}
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier, index) => (
                        <Grid item key={index} xs={12} sm={6} md={6}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                />
                                <CardContent className={classes.CardContent}>
                                    <div className={classes.cardPricing}>
                                        <Typography
                                            component="h2"
                                            variant="h3"
                                            color="textPrimary"
                                        >
                                            ${tier.price}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="textSecondary"
                                        >
                                            /mo
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line, index) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={index}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        className={classes.button}
                                        fullWidth
                                        variant={tier.buttonVariant}
                                        color="primary"
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
