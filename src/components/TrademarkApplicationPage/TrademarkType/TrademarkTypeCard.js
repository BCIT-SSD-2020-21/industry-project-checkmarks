import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../../styles/Themes';
import Alert from '@material-ui/lab/Alert';
import { TextField } from '@material-ui/core';
// import DisplayModal from '../../Modal';
import { TrademarkRulesCIPO } from '../../../services/content';

const TrademarkTypeCard = ({ info, setInfo }) => {
    const classes = useStyles();

    //Modal State
    // const [open, setOpen] = useState(false);

    return (
        <div className={classes.trademarkTypeCard}>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Trademark Name"
                    placeholder="Type out your trademark here"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="text"
                    value={info.characterText}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            characterText: e.target.value,
                        })
                    }
                />

                <Alert severity="info" className={classes.alert}>
                    {/* <DisplayModal
                        content={TrademarkRulesCIPO}
                        open={open}
                        setOpen={setOpen}
                    /> */}
                    A Trademark cannot be 'primarily merely a surname'
                </Alert>
            </div>
        </div>
    );
};

export default TrademarkTypeCard;
const useStyles = makeStyles((theme) => ({
    trademarkTypeCard: {
        width: '100%',
        margin: 'auto',
        marginBottom: '3%',
    },

    alert: {
        backgroundColor: checkmarksTheme.transparentCard,
        color: checkmarksTheme.textActive,
        fontSize: '13px',
        margin: 'auto',
    },
    input: {
        borderRadius: '25px',
        fontSize: '14px',
        marginTop: '3%',
        [theme.breakpoints.down('xs')]: {
            margin: '5% auto',
        },
    },
}));
