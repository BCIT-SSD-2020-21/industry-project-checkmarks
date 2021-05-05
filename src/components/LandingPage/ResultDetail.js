import React from 'react';
import { Box, Button, Card, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';

export default function ResultDetail({ data, setSelectedRow }) {
    const classes = detailStyles();

    return (
        <Card className={classes.container}>
            <Button
                className={classes.button}
                onClick={() => setSelectedRow(null)}
            >
                Back to List View
            </Button>

            {/* <Box className={classes.split}> */}

            <Box className={classes.details}>
                {data?.mediaUrls && (
                    <CardMedia
                        className={classes.image}
                        image={data.mediaUrls[0] ? data.mediaUrls[0] : ''}
                        title={'Trademark Image'}
                        component="img"
                    />
                )}
                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'Trademark Title: '}
                    </Typography>
                    <Typography className={classes.value}>
                        {data.title}
                    </Typography>
                </Box>

                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'Owner: '}
                    </Typography>
                    <Typography className={classes.value}>
                        {data.owner}
                    </Typography>
                </Box>

                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'Types: '}
                    </Typography>
                    <Box className={classes.listing}></Box>
                    {data.tmTypeDescriptions.map((type, index) => {
                        return (
                            <Typography key={index} className={classes.value}>
                                {type +
                                    (data.tmTypeDescriptions.length ===
                                    index + 1
                                        ? ''
                                        : ', ')}
                            </Typography>
                        );
                    })}
                </Box>

                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'Status: '}
                    </Typography>
                    <Typography className={classes.value}>
                        {data.statusDescEn}
                    </Typography>
                </Box>

                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'File Date (yyyy-mm-dd): '}
                    </Typography>
                    <Typography className={classes.value}>
                        {data.fileDateFormatted}
                    </Typography>
                </Box>

                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'Registration Date: '}
                    </Typography>
                    <Typography className={classes.value}>
                        {data.regDate}
                    </Typography>
                </Box>

                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'Renewal date: '}
                    </Typography>
                    <Typography className={classes.value}>
                        {data.intrnlRenewDate}
                    </Typography>
                </Box>
                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'NICE Classes: '}
                    </Typography>
                    <Box className={classes.listing}>
                        {data.niceClasses.map((item, index) => {
                            return (
                                <Typography
                                    className={classes.value}
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
                </Box>
                <Box className={classes.field}>
                    <Typography className={classes.label}>
                        {'Application Numbers: '}
                    </Typography>
                    <Box className={classes.listing}>
                        {data.applicationNumberL.map((item, index) => {
                            return (
                                <Typography
                                    className={classes.value}
                                    key={index}
                                >
                                    {`${item}${
                                        data.applicationNumberL.length ===
                                        index + 1
                                            ? ''
                                            : ', '
                                    }`}
                                </Typography>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
            {/* </Box> */}
        </Card>
    );
}

const detailStyles = makeStyles(() => ({
    container: {
        backgroundColor: checkmarksTheme.bgDrawer,
        height: '100%',
        paddingBottom: '10px',
        width: '100%',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '90%',
        ['@media (min-width:768px)']: { width: '80%' },
        ['@media (min-width:1280px)']: { width: '70%' },
    },
    split: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '1%',
    },
    image: {
        maxHeight: '200px',
        // ['@media (min-height:768px)']: { width: '80%' },
        // ['@media (min-height:1280px)']: { width: '70%' },
        // width: '40%',
    },
    field: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '10px',
        width: '100%',
    },
    label: {
        fontSize: '12px',
        marginRight: '6px',
    },
    value: {
        fontSize: '12px',
        marginLeft: '6px',
    },
    listing: {
        display: 'flex',
        flexDirection: 'row',
    },
    // info: {
    //     fontSize: '12px',
    // },
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
