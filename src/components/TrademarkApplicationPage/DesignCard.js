import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const LogoForm = () => {
    const classes = useStyles();
    return (
        <Card className={classes.logoCard}>
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
