import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
    const classes = useStyles();

    return (
        <Typography
            className={classes.text}
            variant="body2"
            color="textSecondary"
            align="center"
        >
            {'Copyright © '}
            <Link color="inherit" href="https://checkmarks.ca/">
                Checkmarks
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            textAlign: 'center',
        },
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        // marginTop: theme.spacing(8),
        // paddingLeft: theme.spacing(3),
        // paddingRight: theme.spacing(3),
        // paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        // transform: 'perspective(350px) rotateX(18deg)',
        [theme.breakpoints.up('sm')]: {
            // paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            // paddingLeft: theme.spacing(6),
            // paddingRight: theme.spacing(6),
        },
    },
    footerGrid: {
        padding: 0,
        margin: 'auto',
        width: '80%',
        transform: 'perspective(350px) rotateX(18deg)',
    },
    footerGridInner: {
        padding: 0,
    },
    text: {
        textAlign: 'center',
        color: checkmarksTheme.textFooter,
    },
}));

const footers = [
    {
        title: 'Checkmarks',
        description: ['Team', 'Contact Us', 'Location'],
    },
    {
        title: 'Links',
        description: ['Dearly', 'Clio', 'LawPay'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource'],
    },
    {
        title: 'Legal Assistance',
        description: ['Register Your Brand', 'Search a Brand', 'Ask a Lawyer'],
    },
];

export default function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* <CssBaseline /> */}
            <Container
                maxWidth="md"
                component="footer"
                className={classes.footer}
            >
                <Grid
                    container
                    className={classes.footerGrid}
                    spacing={4}
                    justify="space-evenly"
                >
                    {footers.map((footer) => (
                        <Grid
                            item
                            xs={6}
                            sm={3}
                            key={footer.title}
                            className={classes.footerGridInner}
                        >
                            <Typography
                                className={classes.text}
                                variant="h6"
                                color="textPrimary"
                                gutterBottom
                            >
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link
                                            className={classes.text}
                                            href="#"
                                            variant="subtitle1"
                                            color="textSecondary"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>

                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
}
