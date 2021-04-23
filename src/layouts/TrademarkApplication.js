import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AskALawyer from '../components/AskALawyer';
import Card from '@material-ui/core/Card';
import TrademarkAppSearchBar from '../components/TrademarkAppSearchBar';
import Logo2 from '../images/CheckmarksLogo2.png';
import Alert from '@material-ui/lab/Alert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CountryCard from '../components/TradeMarkApplicationPage/CountryCard';

const TrademarkApplication = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <img src={Logo2} alt="Logo" />
            </div>
            <AskALawyer />
            <div className={classes.title}>
                <span className={classes.text}>Trademark Application</span>
            </div>
            {/* ===================================== */}
            {/*====== Outter Card -- Main  card *==== */}
            {/* ===================================== */}
            <Card className={classes.outerCard}>
                <div className={classes.outerText}>
                    <p style={{ color: 'red' }}>What type of Trademark? </p>
                    <p style={{ color: 'red', fontSize: 15 }}>
                        Select all that apply
                    </p>
                </div>
                {/* ======================================== */}
                {/* Search for trade mark card */}
                {/* ======================================== */}
                <Card className={classes.searchCard}>
                    <p style={{ color: 'red', fontSize: 15 }}>
                        Enter your trademark text
                    </p>
                    <TrademarkAppSearchBar />

                    <Alert severity="info" className={classes.alert}>
                        A Trademark cannot be 'primarily merely a surname'
                    </Alert>

                    {/* ======================================== */}
                    {/* Search Result card */}
                    {/* ======================================== */}

                    <Card className={classes.resultCard}>
                        <div className={classes.resultCardHeading}>
                            {' '}
                            <p>Top existing matches found...</p>
                            <button className={classes.seeAllButton}>
                                See all
                            </button>
                        </div>
                        <p>placeholder</p>
                        <p>placeholder</p>
                        <p>placeholder</p>

                        <div className={classes.resultCardButtons}>
                            <button>
                                <ArrowBackIcon />
                            </button>
                            <button>
                                <ArrowForwardIcon />
                            </button>
                        </div>
                    </Card>
                </Card>

                {/* ======================================== */}
                {/* Logo card */}
                {/* ======================================== */}

                <Card className={classes.logoCard}>
                    <div>
                        <p>select a file to upload</p>
                        <button>browse</button>
                    </div>
                </Card>

                {/* ======================================== */}
                {/* detail selection card */}
                {/* ======================================== */}
                <Card className={classes.detailsCard}>
                    <p style={{ color: 'red' }}>Select all that Apply </p>
                    <p style={{ color: 'red', fontSize: 12 }}>
                        For below selections,{' '}
                        <strong>contact with lawyer</strong> is required to
                        process the application.
                    </p>

                    {/* Selection section */}

                    <div className={classes.selectionFlex}>
                        {/* column 1 */}
                        <FormGroup column>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    // checked={state.checkedA}
                                    // onChange={handleChange}
                                    // name="checkedA"
                                    />
                                }
                                label="Color"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Position"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Hologram"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Motion"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Motion"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Mode of packaging goods"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Three dimensional"
                            />
                        </FormGroup>

                        <FormGroup column>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Sound"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Taste"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Scent"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Texture"
                            />
                        </FormGroup>
                    </div>
                </Card>

                <Alert severity="info" className={classes.alert}>
                    Helper Section with brief legal information, assisting the
                    client through the process
                </Alert>

                <button className={classes.nextButton}>Next Step</button>
            </Card>

            <CountryCard />
        </div>
    );
};

export default TrademarkApplication;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },

    text: {
        fontSize: 30,
        color: 'red',
        fontWeight: 500,
    },

    outerCard: {
        width: '75%',
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'column',
    },

    searchCard: {
        width: '75%',
        margin: 'auto',
        marginBottom: '3%',
    },

    nextButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '40%',
        height: '50px',
        margin: '3%',
        borderRadius: '30px',
        marginBottom: '5%',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '20%',
        },
    },

    resultCardHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    resultCard: {
        width: '75%',

        margin: 'auto',
        marginTop: '5%',
        marginBottom: '10%',
    },
    seeAllButton: {
        backgroundColor: '#128b83',
        color: '#fff',
        borderRadius: '10px',
        width: '25%',
    },

    resultCardButtons: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    outerText: {
        justifyContent: 'flex-start',
        fontWeight: 550,
    },
    alert: {
        width: '80%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },

    logoCard: {
        width: '75%',
        margin: 'auto',
        paddingBottom: '2em',
    },

    detailsCard: {
        width: '75%',
        margin: 'auto',
        marginTop: '3%',
    },

    selectionFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
}));
