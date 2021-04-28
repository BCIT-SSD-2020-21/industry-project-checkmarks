import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { TextField, Card } from '@material-ui/core';

const TrademarkTypeCard = ({ info, setInfo }) => {
    const classes = useStyles();
    // const [trademark, setTrademark] = useState({
    //     trademarkName: '',
    // });

    return (
        <div className={classes.trademarkTypeCard}>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Trademark Name"
                    placeholder="Type out your trademark below (,letters, numbers, and or symbolds only)"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="text"
                    value={info.trademarkName}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            trademarkName: e.target.value,
                        })
                    }
                />

                <Alert severity="info" className={classes.alert}>
                    A Trademark cannot be 'primarily merely a surname'
                </Alert>
            </div>
        </div>
    );
};

export default TrademarkTypeCard;
const useStyles = makeStyles((theme) => ({
    trademarkTypeCard: {
        width: '90%',
        margin: 'auto',
        marginBottom: '3%',
    },

    alert: {
        margin: '3% auto',
        color: '#2a9df4',
        fontSize: '13px',
    },
    input: {
        borderRadius: '10px',
        marginTop: '3%',
        [theme.breakpoints.down('xs')]: {
            margin: '5% auto',
        },
    },
}));
