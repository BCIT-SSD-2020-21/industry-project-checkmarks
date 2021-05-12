import React, { useState, useEffect, useRef } from 'react';
import {
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Card,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
    Button,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import MuiVirtualizedTable from '../VirtualizedTable';
import SearchField from '../SearchField';
import TermSelector from './TermSelector';
import Checkmark from '../Checkmark';
import { searchTerms, getAllClasses } from '../../services/checkmarks';

export default function GoodsAndServices({
    navigation,
    step,
    info,
    setInfo,
    currentStep,
    setCurrentStep,
    progressValue,
    validationProgress,
}) {
    const classes = useStyles();

    // INPUT statevar
    const [searchTerm, setSearchTerm] = useState(''); // user's search
    const [searchClassFilter, setSearchClassFilter] = useState(''); // user to filter results by class name
    const [open, setOpen] = useState(false); // dialog box showing when no terms selected
    // INITIALIZE From 'info' Statevar
    const [selectedTerms, setSelectedTerms] = useState(info.termsSelected); // rendered on Selected Terms summary
    const [selectedClasses, setSelectedClasses] = useState(
        info.classesSelected
    );
    const [totalAmount, setTotalAmount] = useState(0);

    // SELECTION HANDLING
    const [termBeingToggledNumber, setTermBeingToggledNumber] = useState(null);
    useEffect(() => {
        if (termBeingToggledNumber) {
            toggleTermSelectionStatus(termBeingToggledNumber);
        }
        setTermBeingToggledNumber(null);
    }, [termBeingToggledNumber]);

    // GET TERMS AFTER TEXT INPUT (with Delay)
    const [termSearchResults, setTermSearchResults] = useState([]);
    const { current: searchInstance } = useRef({});
    useEffect(() => {
        setTermTableData([]);
        if (searchInstance.delayTimer) {
            clearTimeout(searchInstance.delayTimer);
        }
        if (searchTerm.length > 2) {
            if (searchTerm !== '') {
                searchInstance.delayTimer = setTimeout(() => {
                    (async () => {
                        console.log('after 2 sec');
                        const result = await searchTerms(searchTerm);
                        setTermSearchResults(result.terms);
                    })();
                }, 750);
            }
        }
    }, [searchTerm]);

    // RESULTS FROM PREVIOUS GET, POPULATED TO TERM TABLE ARRAY, which is Rendered Rendered
    const [termTableData, setTermTableData] = useState([]); // DATA Rendering on Table (Displayed)
    useEffect(() => {
        renderTerms();
    }, [termSearchResults, selectedTerms]);
    const renderTerms = () => {
        const termData = []; // formatted to fit table
        termSearchResults.forEach((resultItem) => {
            let termSelected = false;
            selectedTerms.forEach((term) => {
                if (term.id === resultItem.id) {
                    termSelected = true;
                }
            });
            let termTableDataFormat = {
                ...resultItem,
                selected: termSelected,
                selectionCheckbox: (
                    <TermSelector
                        number={resultItem.id}
                        selected={termSelected}
                        handler={setTermBeingToggledNumber}
                    />
                ),
                id: resultItem.id,
                termName: resultItem.termName,
                termClass: resultItem.termClass,
                classShortName: resultItem.classShortName,
            };
            termData.push(termTableDataFormat);
        });
        setTermTableData(termData);
    };
    const removeTerm = (term) => {
        // const newSelectedTerms = selectedTerms;
        let newSelectedTerms = selectedTerms.filter(
            (item) => item.id !== term.id
        );
        setTermTableData([]);
        setSelectedTerms(newSelectedTerms);
    };
    // const handleRemoveTerm = (term) => { // customized function when removing from Selected Terms section; above is called at checkmark remove

    // }

    // COSMETIC statevar (indicator)
    const { current: instance } = useRef({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (instance.delayTimer) {
            clearTimeout(instance.delayTimer);
        }
        if (searchTerm !== '' && termTableData?.length === 0) {
            setLoading(true);
            instance.delayTimer = setTimeout(() => {
                setLoading(false); // after 3 seconds, stop Loading Indicator
            }, 3000);
        } else {
            setLoading(false);
        }
    }, [searchTerm, termTableData]);

    const [selectedRow, setSelectedRow] = useState(null); // toggle ListView, detailedView
    const [filterSelection, setFilterSelection] = useState(null); // filter termTableResults
    const onFilterClick = (e) => {
        setFilterSelection(e.currentTarget.value);
    };

    // Functions
    const toggleTermSelectionStatus = (termNumber) => {
        let termIndex = termTableData.findIndex(
            (term) => term.id == termNumber
        );
        if (termIndex === -1) {
            console.log('Term not found'); // handle error
        } else {
            let updatedTerm = {
                ...termTableData[termIndex],
                selected: !termTableData[termIndex].selected,
                selectionCheckbox: (
                    <TermSelector
                        number={termNumber}
                        selected={!termTableData[termIndex].selected}
                        handler={setTermBeingToggledNumber}
                    />
                ),
            };
            setTermTableData([
                ...termTableData.slice(0, termIndex),
                Object.assign({}, termTableData[termIndex], updatedTerm),
                ...termTableData.slice(termIndex + 1),
            ]);
            // handle SELECTED TERMS & CLASSES
            if (
                updatedTerm.selected === true ||
                termTableData[termIndex].selected === false
            ) {
                // ADD to Selected Terms
                setSelectedTerms([...selectedTerms, termTableData[termIndex]]);
            } else if (
                updatedTerm.selected === false ||
                termTableData[termIndex].selected === true
            ) {
                // REMOVE from Selected Terms
                removeTerm(termTableData[termIndex]);
            }
        }
    };

    console.log('info: ', info);

    // upon selectedTerms update, run logic to change selectedClasses (no duplicates) and totalAmount
    useEffect(() => {
        const classesSelected = [];
        if (selectedTerms.length > 0) {
            selectedTerms.forEach((term) => {
                let termClassExists = false;
                classesSelected.forEach((niceClass) => {
                    if (niceClass.id === term.termClass) {
                        termClassExists = true;
                    }
                });
                if (!termClassExists) {
                    classesSelected.push({
                        id: term.termClass,
                        description: term.classShortName,
                    });
                }
                termClassExists = false;
            });
            setSelectedClasses(classesSelected);
            if (classesSelected.length > 0) {
                setTotalAmount(
                    (1500 + 100 * (classesSelected.length - 1)).toFixed(2)
                );
            } else if (classesSelected.length === 0) {
                setTotalAmount(0);
            }
        } else {
            setSelectedClasses([]);
            setTotalAmount(0);
        }

        setInfo({ ...info, termsSelected: selectedTerms });
    }, [selectedTerms]);

    // UPDATE PARENT Statevar 'info'
    useEffect(() => {
        if (selectedClasses?.length > 0) {
            setInfo({
                ...info,
                classesSelected: selectedClasses,
                amount: totalAmount,
            });
        }
    }, [selectedClasses]);

    // Functions to handle Next/Previous Steps
    const previousStep = () => {
        setCurrentStep(currentStep - 1); // assign currentStep to next step
        navigation.previous();
    };
    const nextStep = () => {
        setCurrentStep(currentStep + 1); // assign currentStep to next step
        navigation.next();
    };

    return (
        <Card className={classes.card}>
            <h1 className={classes.title}>Goods and Services</h1>
            <div className={classes.formContainer}>
                <Typography gutterBottom>
                    A Trademark is registered under one or more{' '}
                    <b>NICE class(es)</b>. <br />
                    <br />
                    This Trademark application service base price is $1,500.00
                    and includes 1 (one) NICE Class applied to your Trademark.{' '}
                    <br />
                    <br />
                    If your Trademark must be registered under additional NICE
                    Classes,{' '}
                    <b>
                        an additional government fee of $100.00 will be applied
                        per additional NICE class.
                    </b>
                    <br />
                    <br />
                    Please search for the <b>Terms</b> which may apply to your
                    Trademark. Each <b>Term</b> is associated with a{' '}
                    <b>NICE Class</b>.
                </Typography>

                {/* ///////////////////////////search trademark terms/////////////////////////// */}
                <h3>Search for your Trademark Terms</h3>
                <SearchField loading={loading} setInputTo={setSearchTerm} />

                {(searchTerm.length > 2 || termTableData.length > 0) &&
                    !loading && (
                        <>
                            {termTableData.length > 0 ? (
                                <Paper
                                    className={classes.results}
                                    style={{
                                        backgroundColor:
                                            checkmarksTheme.bgTransparent,
                                        height: '500px', // (window.innerHeight * 4) / 5,
                                        width: '100%',
                                    }}
                                >
                                    <MuiVirtualizedTable
                                        // style={{ height: 400, width: '100%' }}
                                        rowCount={termTableData.length} // row or data
                                        rowGetter={({ index }) =>
                                            termTableData[index]
                                        } // row or data
                                        onRowClick={(e) =>
                                            setSelectedRow(e.index)
                                        }
                                        onFilterClick={onFilterClick}
                                        columns={[
                                            {
                                                width:
                                                    (window.innerWidth * 2) /
                                                    10,
                                                label: [
                                                    'Selected',
                                                    '',
                                                    onFilterClick,
                                                    [],
                                                ],
                                                dataKey: 'selectionCheckbox',
                                            },
                                            {
                                                width:
                                                    (window.innerWidth * 3) /
                                                    10,
                                                label: [
                                                    'Term Name',
                                                    '',
                                                    onFilterClick,
                                                    [],
                                                ],
                                                dataKey: 'termName',
                                            },
                                            {
                                                width:
                                                    (window.innerWidth * 1) /
                                                    10,
                                                label: [
                                                    'NICE Class',
                                                    '',
                                                    onFilterClick,
                                                    [],
                                                ],
                                                dataKey: 'termClass',
                                            },
                                            {
                                                width:
                                                    (window.innerWidth * 4) /
                                                    10,
                                                label: [
                                                    'NICE Class Name',
                                                    '',
                                                    onFilterClick,
                                                    [],
                                                ],
                                                dataKey: 'classShortName',
                                            },
                                        ]}
                                    />
                                </Paper>
                            ) : (
                                <Paper>
                                    <Typography>No results</Typography>
                                </Paper>
                            )}
                        </>
                    )}

                {/* ///////////////////////////selected terms section /////////////////////////// */}
                <Card className={classes.selectedTerms}>
                    <CardContent>
                        <Typography variant="h6">
                            <b>Selected Terms:</b>
                        </Typography>

                        <List>
                            {selectedClasses?.length > 0 &&
                                selectedClasses.map((niceClass, index) => (
                                    <div key={index}>
                                        <h4>
                                            {'Class: ' +
                                                niceClass?.id +
                                                ' - ' +
                                                niceClass?.description}
                                        </h4>
                                        <ListItem
                                            className={classes.classTermList}
                                        >
                                            {selectedTerms
                                                // [selectedClasses?.indexOf(
                                                //         classNum.number)]?
                                                .map((term, index) => {
                                                    if (
                                                        term.termClass ===
                                                        niceClass.id
                                                    ) {
                                                        return (
                                                            <div
                                                                className={
                                                                    classes.selectedTermListItem
                                                                }
                                                                key={index}
                                                                style={{
                                                                    margin:
                                                                        '4px',
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    // className={
                                                                    //     classes.selectedTermListItem
                                                                    // }
                                                                    primary={
                                                                        term.termName
                                                                    }
                                                                    secondary={
                                                                        'id: ' +
                                                                        term.id
                                                                    }
                                                                />
                                                                <IconButton
                                                                    color="secondary"
                                                                    variant="contained"
                                                                    onClick={() => {
                                                                        removeTerm(
                                                                            term
                                                                        );
                                                                    }}
                                                                >
                                                                    <DeleteForeverTwoToneIcon />
                                                                </IconButton>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                        </ListItem>
                                    </div>
                                ))}
                        </List>
                    </CardContent>
                </Card>
                {/* ///////////////////////////total amount section /////////////////////////// */}
                <Card>
                    <CardContent className={classes.amount}>
                        <Typography variant="h6">
                            <b>Amount:</b>
                        </Typography>
                        <Typography variant="body1" component="p">
                            {/* {additionalNICE} */}
                            {`$${totalAmount.toString()}`}
                        </Typography>
                    </CardContent>
                </Card>

                <Checkmark value={validationProgress.amountNotZero} />

                <Alert severity="info" className={classes.alert}>
                    Helper section with brief legal information, assisting the
                    client through the process.
                </Alert>

                <div className={classes.buttonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.backButton}
                        onClick={() => previousStep()}
                    >
                        Back
                    </Button>
                    <Button
                        className={classes.continueButton}
                        type="submit"
                        variant="contained"
                        onClick={() => nextStep()}
                        disabled={progressValue < step.progressValueEnd}
                    >
                        Continue
                    </Button>
                </div>
            </div>
            {/* ///////////////////////////warning section /////////////////////////// */}
            <Dialog
                open={open}
                // onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Continue without selecting any terms?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You have not selected any trademark terms. This can be
                        figured out at a later time. Do you wish to continue?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => previousStep()}
                    >
                        Back
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => nextStep()}
                        // disabled={}
                        disabled={progressValue < step.progressValueEnd}
                        autoFocus
                    >
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: checkmarksTheme.transparentCard,
        border: '1px solid #696969',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        margin: '3%',
        width: '95%',
        padding: '0 5% 5% 5%',
        [theme.breakpoints.up('md')]: {
            width: '60%',
            padding: '0 2% ',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0 5% 2% 5%',
        },
    },
    formContainer: {
        border: '1px solid #696969',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        margin: '3%',
        padding: '25px',
    },
    title: {
        color: '#df3a48',
        marginBottom: '3%',
    },
    searchTermsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3%',
    },
    searchTermsButton: {
        marginLeft: '1%',
        width: '15%',
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
    },
    selectedTerms: {
        margin: '3% 0',
        padding: '15px',
    },
    classTermList: {
        display: 'flex',
        flexDirection: 'column',
    },
    selectedTermListItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    amount: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2% 0',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    continueButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        marginTop: '10%',
        marginLeft: '3%',
        margin: '10% 0 0 3%',
        width: '30%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '5% 3% 2% 0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '6% 3% 0% 0',
        },
    },
    backButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        marginTop: '10%',
        width: '30%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.up('md')]: {
            margin: '5% 3% 2% 0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '6% 3% 0% 0',
        },
    },
    alert: {
        color: '#2a9df4',
        marginTop: '10%',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '5%',
        },
    },
}));
