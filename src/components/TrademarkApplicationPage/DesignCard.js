import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const LogoForm = () => {
    const classes = useStyles();
    return (
        <Card className={classes.logoCard}>
            <FormControlLabel control={<Checkbox />} label="Design or Logo" />
            <div>
                <p>select a file to upload</p>
                <button>browse</button>
            </div>
        </Card>
    );
};

export default LogoForm;
const useStyles = makeStyles((theme) => ({
    logoCard: {
        width: '75%',
        margin: 'auto',
        paddingBottom: '2em',
    },
}));
