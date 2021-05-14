import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../styles/Themes';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

export default function ServiceSelect({
    info,
    setInfo,
    setTotalAmount,
    selectedClasses,
}) {
    const classes = useStyles();

    const [selectedService, setSelectedService] = useState('DIY');

    return (
        <Box className={classes.container}>
            <Button
                className={classes.buttonDIY}
                onClick={() => {
                    setInfo({
                        ...info,
                        selectedServiceName: 'DIY',
                        basePrice: 690,
                        amount: (
                            690 +
                            100 * (selectedClasses.length - 1)
                        ).toFixed(2),
                    });
                    setTotalAmount(
                        (690 + 100 * (selectedClasses.length - 1)).toFixed(2)
                    );
                }}
            >
                <Box
                    className={classes.buttonDIYContentContaner}
                    style={{
                        border:
                            info.selectedServiceName === 'DIY'
                                ? '5px solid green'
                                : '1px solid white',
                    }}
                >
                    <Typography className={classes.buttonDIYText}>
                        DIY+
                    </Typography>
                    <Typography className={classes.buttonDIYAmount}>
                        $690.00
                    </Typography>
                </Box>
            </Button>
            {/* <IconButton className={classes.buttonIcon}>
                <HelpOutlineOutlinedIcon fontSize="large" />
            </IconButton> */}
            <Button
                className={classes.buttonFullService}
                onClick={() => {
                    setInfo({
                        ...info,
                        selectedServiceName: 'Full',
                        basePrice: 1500,
                        amount: (
                            1500 +
                            100 * (selectedClasses.length - 1)
                        ).toFixed(2),
                    });
                    setTotalAmount(
                        (1500 + 100 * (selectedClasses.length - 1)).toFixed(2)
                    );
                }}
            >
                <Box
                    className={classes.buttonFullServiceContentContaner}
                    style={{
                        border:
                            info.selectedServiceName === 'Full'
                                ? '5px solid green'
                                : '1px solid red',
                    }}
                >
                    <Typography className={classes.buttonFullServiceText}>
                        Full Service
                    </Typography>
                    <Typography className={classes.buttonFullServiceAmount}>
                        $1500.00
                    </Typography>
                </Box>
            </Button>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: checkmarksTheme.transparent,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '3% 0',
    },
    buttonDIY: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        height: '120px',
        width: '50%',
    },
    buttonDIYText: {
        color: checkmarksTheme.buttonTextPrimary,
        fontWeight: 'bold',
    },
    buttonDIYAmount: {
        fontStyle: 'italic',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    buttonFullServiceAmount: {
        fontStyle: 'italic',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    buttonFullService: {
        backgroundColor: checkmarksTheme.buttonSecondary,
        height: '120px',
        width: '50%',
    },
    buttonFullServiceText: {
        color: checkmarksTheme.buttonTextSecondary,
        fontWeight: 'bold',
    },
    buttonDIYContentContaner: {
        border: '1px solid white',
        borderRadius: '5px',
        height: '110px',
        width: '110px',
    },
    buttonFullServiceContentContaner: {
        border: '1px solid red',
        borderRadius: '5px',
        height: '110px',
        width: '110px',
    },
    buttonIcon: {
        color: checkmarksTheme.textActive,
    },
}));
