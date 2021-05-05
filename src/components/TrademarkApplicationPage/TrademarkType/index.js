import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import DesignCard from '../TrademarkType/DesignCard';
import DetailSelectCard from '../TrademarkType/DetailSelectCard';
import TextSearchCard from '../TrademarkType/TrademarkTypeCard';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkmark from '../../Checkmark';

const TrademarkForm = ({ navigation, info, setInfo, inputValidationValue }) => {
    const classes = useStyles();
    //selection of all the other trademark type
    const otherTypesSelection = [
        'Color',
        'Position',
        'Hologram',
        'Motion',
        'Mode of packaging goods',
        'Three dimensional',
        'Sound',
        'Taste',
        'Scent',
        'Texture',
    ];

    return (
        <Card className={classes.outerCard}>
            <h1 className={classes.title}>Trademark Type</h1>
            <div className={classes.outerText}>
                <Typography className={classes.trademarkMessage}>
                    Please{' '}
                    <span style={{ color: '#DF3A48' }}>
                        <strong>select all </strong>{' '}
                    </span>
                    that apply, and provide additional information as you can:
                </Typography>
            </div>
            {/* ======================================== */}
            {/* Text Search Form */}
            {/* ======================================== */}
            <FormControlLabel
                control={<Checkbox checked={info.isText} />}
                label="Standard Characters"
                value="standardCharacter"
                onChange={(e) =>
                    setInfo({
                        ...info,
                        isText: !info.isText,
                    })
                }
            />
            {info.isText && <TextSearchCard info={info} setInfo={setInfo} />}
            {/* ======================================== */}
            {/* Logo card */}
            {/* ======================================== */}
            <FormControlLabel
                control={<Checkbox checked={info.isLogo} />}
                label="Logos or Design"
                onChange={(e) =>
                    setInfo({
                        ...info,
                        isLogo: !info.isLogo,
                    })
                }
            />
            {info.isLogo && <DesignCard info={info} setInfo={setInfo} />}
            {/* ======================================== */}
            {/* detail selection card */}
            {/* ======================================== */}
            <FormControlLabel
                control={<Checkbox checked={info.isOther} />}
                label="Others "
                onChange={(e) =>
                    setInfo({
                        ...info,
                        isOther: !info.isOther,
                        OtherTypes: [],
                    })
                }
            />

            {info.isOther && (
                <div>
                    <p style={{ fontWeight: 'bold' }}>Select all that apply</p>
                    <p style={{ color: '#DF3A48', fontSize: 12 }}>
                        For below selections,{' '}
                        <strong>Contact with a lawyer</strong> is required to
                        process the application.
                    </p>
                </div>
            )}
            <Checkmark
                value={inputValidationValue.trademarkTypeFormCompleted}
            />
            <div className={classes.detailSelectCardContainer}>
                {/* map other Types Selection */}
                {info.isOther &&
                    otherTypesSelection.map((otherType, index) => (
                        <DetailSelectCard
                            otherType={otherType}
                            info={info}
                            setInfo={setInfo}
                            index={index}
                            key={index}
                        />
                    ))}
            </div>
            <Alert severity="info" className={classes.alert}>
                Helper Section with brief legal information, assisting the
                client through the process
            </Alert>
            <div className={classes.buttonContainer}>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.backButton}
                    onClick={() => navigation.previous()}
                >
                    Back
                </Button>
                <Button
                    className={classes.continueButton}
                    type="submit"
                    variant="contained"
                    onClick={() => navigation.next()}
                >
                    Continue
                </Button>
            </div>
        </Card>
    );
};
export default TrademarkForm;
const useStyles = makeStyles((theme) => ({
    outerCard: {
        margin: '3%',
        display: 'flex',
        padding: '0 5% 5% 5%',
        flexDirection: 'column',
        width: '70%',
        [theme.breakpoints.up('md')]: {
            width: '60%',
            padding: '0 2% ',
        },
        border: '1px solid #696969',
    },
    title: {
        color: '#DF3A48',
    },
    outerText: {
        justifyContent: 'flex-start',
        fontWeight: 550,
    },
    detailSelectCardContainer: {
        columns: '1 auto',
        width: '90%',
        margin: '0 auto',
        padding: '3%',
        [theme.breakpoints.up('md')]: {
            columns: '2 auto',
        },
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    continueButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        marginTop: '10%',
        marginLeft: '3%',
        width: '30%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '5% 3% 5% 0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '6% 2% 1% 0',
        },
    },
    backButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        marginTop: '10%',
        width: '30%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.up('md')]: {
            margin: '5% 3% 5% 0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '6% 3% 1% 0',
        },
    },
    trademarkMessage: {
        marginBottom: '3%',
        fontSize: 17,
    },
    alert: {
        color: '#2a9df4',
        margin: '2% 0 5% 0',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            margin: '0',
        },
    },
}));
