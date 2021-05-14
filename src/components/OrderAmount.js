import React from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../styles/Themes';

// Displays Order Summary amounts
export default function OrderAmount({ info }) {
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardContent className={classes.amountSection}>
                <Box className={classes.amountSummaryField}>
                    <Typography className={classes.amountSummaryLabel}>
                        {`Base Price (${info.selectedServiceName}):`}
                    </Typography>
                    <Typography className={classes.amountSummaryValue}>
                        {`$${info.basePrice.toFixed(2).toString()}`}
                    </Typography>
                </Box>
                <Box className={classes.amountSummaryField}>
                    <Typography className={classes.amountSummaryLabel}>
                        First NICE Class:
                    </Typography>
                    <Typography className={classes.amountSummaryValue}>
                        {/* {additionalNICE} */}
                        {'$0.00'}
                    </Typography>
                </Box>
                <hr />
                <Box className={classes.amountSummaryField}>
                    <Typography className={classes.amountSummaryLabel}>
                        Additional NICE Classes selected (+$100.00 each):
                    </Typography>
                    <Typography className={classes.amountSummaryValue}>
                        {/* {additionalNICE} */}
                        {`${(info.classesSelected.length - 1).toString()}`}
                    </Typography>
                </Box>
                <hr />
                <Box className={classes.amountSummaryField}>
                    <Typography className={classes.amountLabel}>
                        Subtotal:
                    </Typography>
                    <Typography className={classes.amountTotal}>
                        {/* {additionalNICE} */}
                        {`$${info.amount.toString()}`}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: checkmarksTheme.transparentCard,
        border: '1px solid #696969',
        margin: '3% 0',
        width: '100%',
        marginBottom: '5%',
    },

    selectedTerms: {
        backgroundColor: checkmarksTheme.transparentCard,
        margin: '3% 0',
        padding: '15px',
    },
    amountContainer: {
        alignItems: 'center',
        backgroundColor: checkmarksTheme.transparentCard,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '2% 0',
    },
    amountSection: {
        alignItems: 'center',
        border: `1px solid ${checkmarksTheme.borderCardSection}`,
        display: 'flex',
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '0',
        padding: '4%',
        width: '100%',
    },
    amountSummaryField: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    amountSummaryLabel: {
        fontSize: '16px',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: checkmarksTheme.textValue3,
    },
    amountSummaryValue: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: checkmarksTheme.textValue3,
    },
    amountLabel: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    amountTotal: {
        fontSize: '24px',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
}));
