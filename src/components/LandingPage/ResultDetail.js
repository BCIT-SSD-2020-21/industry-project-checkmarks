import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Card,
    Fade,
    IconButton,
    Paper,
    TableCell,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';
import { AutoSizer, Column, Table } from 'react-virtualized';

export default function ResultDetail({ data, setSelectedRow }) {
    const classes = detailStyles();

    console.log(data);
    return (
        <Card className={classes.container}>
            <Button
                className={classes.button}
                onClick={() => setSelectedRow(null)}
            >
                Back to List View
            </Button>
            <Box className={classes.split}>
                {(data?.imageUrls || true) && (
                    <Box className={classes.image}>
                        <Typography>{'image'}</Typography>
                    </Box>
                )}
                <Box className={classes.details}>
                    <Typography className={classes.title}>
                        {'Tradenark title: ' + data.title}
                    </Typography>
                    {data.tmTypeDescriptions.map((type, index) => {
                        return (
                            <Typography key={index} className={classes.info}>
                                {type +
                                    (data.niceClasses.length === index + 1
                                        ? ''
                                        : ', ')}
                            </Typography>
                        );
                    })}

                    <Typography className={classes.info}>
                        {'Status: ' + data.statusDescEn}
                    </Typography>

                    <Typography className={classes.info}>
                        {'File date: ' + data.fileDateFormatted}
                    </Typography>
                    <Typography className={classes.info}>
                        {'Registration date: ' + data.regDate}
                    </Typography>
                    <Typography className={classes.info}>
                        {'Renew date: ' + data.intrnlRenewDate}
                    </Typography>
                    <Typography className={classes.info}>
                        {'Owner: ' + data.owner}
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.details}>
                <Typography className={classes.info}>{'lorem'}</Typography>
                <Box className={classes.niceClasses}>
                    <Typography className={classes.info}>
                        {'NICE Classes: '}
                    </Typography>
                    {data.niceClasses.map((item, index) => {
                        return (
                            <Typography
                                className={classes.niceClass}
                                key={index}
                            >
                                {`${item}${
                                    data.niceClasses.length === index + 1
                                        ? ''
                                        : ', '
                                }`}
                            </Typography>
                        );
                    })}
                </Box>
                <Box className={classes.niceClasses}>
                    <Typography className={classes.info}>
                        {'Application Numbers: '}
                    </Typography>
                    {data.applicationNumberL.map((item, index) => {
                        return (
                            <Typography
                                className={classes.niceClass}
                                key={index}
                            >
                                {`${item}${
                                    data.applicationNumberL.length === index + 1
                                        ? ''
                                        : ', '
                                }`}
                            </Typography>
                        );
                    })}
                </Box>
            </Box>
        </Card>
    );
}

const detailStyles = makeStyles(() => ({
    container: {
        backgroundColor: checkmarksTheme.bgDrawer,
        height: '100%',
        width: '100%',
    },
    split: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '1%',
    },
    image: {
        backgroundColor: 'gray',
        margin: '1%',
        height: '150px',
        width: '200px',
    },
    info: {
        fontSize: '12px',
    },
    niceClasses: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    niceClass: {
        marginRight: '4px',
    },
    title: {
        fontSize: '14px',
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        backgroundColor: checkmarksTheme.buttonPrimary,
        '&:hover': {
            background: checkmarksTheme.hoverSoft,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        borderRadius: '7px 7px 0 0',
        // borderRadius: '25px',
        color: checkmarksTheme.buttonTextPrimary,
        padding: '5px 0',
    },
}));
