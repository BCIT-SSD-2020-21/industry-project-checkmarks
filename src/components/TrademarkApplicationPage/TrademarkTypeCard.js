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
        <Card className={classes.trademarkTypeCard}>
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
        </Card>
    );
};

export default TrademarkTypeCard;
const useStyles = makeStyles((theme) => ({
    trademarkTypeCard: {
        width: '90%',
        margin: 'auto',
        padding: '0 5% 5% 5%',
        [theme.breakpoints.up('md')]: {
            width: '60%',
            padding: '0 2% ',
        },
    },

    alert: {
        margin: ' auto',
        color: '#2a9df4',
        fontSize: '13px',
        marginBottom: '3%',
    },
    input: {
        borderRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            margin: '2% auto',
        },
    },
}));
