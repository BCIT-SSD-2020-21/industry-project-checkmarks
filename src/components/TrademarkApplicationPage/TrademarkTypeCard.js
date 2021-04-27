import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { FormControl, TextField, Card } from '@material-ui/core';
import TrademarkTextCard from './TextSearchResultCard';

const TrademarkTypeCard = () => {
    const classes = useStyles();
    const [trademark, setTrademark] = useState({
        trademarkName: '',
    });

    return (
        <Card className={classes.trademarkTypeCard}>
            <FormControl>
                <TextField
                    id="outlined-basic"
                    label="Trademark Name"
                    placeholder="Type out your trademark below (,letters, numbers, and or symbolds only)"
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="text"
                    value={trademark.trademarkName}
                    autoComplete="on"
                    onChange={(e) =>
                        setTrademark({
                            ...trademark,
                            trademarkName: e.target.value,
                        })
                    }
                />
            </FormControl>

            <Alert severity="info" className={classes.alert}>
                A Trademark cannot be 'primarily merely a surname'
            </Alert>
        </Card>
    );
};

export default TrademarkTypeCard;
const useStyles = makeStyles((theme) => ({
    searchCard: {
        width: '90%',
        margin: 'auto',
        marginBottom: '3%',
    },
    alert: {
        margin: '3% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
