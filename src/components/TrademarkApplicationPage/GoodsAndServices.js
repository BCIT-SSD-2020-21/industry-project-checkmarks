import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
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
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import MuiVirtualizedTable from '../VirtualizedTable';
import SearchField from '../SearchField';
import TermSelector from './TermSelector';
import Checkmark from '../Checkmark';
import ServiceSelect from '../ServiceSelect';
import OrderAmount from '../OrderAmount';
import { searchTerms } from '../../services/checkmarks';
import { advancedSearch } from '../../utils/FormValidation';

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
    const [searchClassFilterText, setSearchClassFilterText] = useState(''); // user to filter results by class name
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
    const [numberOfRepeatSearches, setNumberOfRepeatSearches] = useState(0);
    useEffect(() => {
        setTermTableData([]);
        if (searchInstance.delayTimer) {
            clearTimeout(searchInstance.delayTimer);
        }
        if (searchTerm !== '' && numberOfRepeatSearches < 5) {
            searchInstance.delayTimer = setTimeout(() => {
                (async () => {
                    const result = await searchTerms(searchTerm);
                    if (result.terms.length > 0) {
                        setTermSearchResults(result.terms);
                        setNumberOfRepeatSearches(0);
                    } else {
                        setNumberOfRepeatSearches(numberOfRepeatSearches + 1);
                    }
                })();
            }, 1000);
        } else if (searchTerm === '') {
            setNumberOfRepeatSearches(0);
        }
    }, [searchTerm, numberOfRepeatSearches]);

    // RESULTS FROM PREVIOUS GET, POPULATED TO TERM TABLE ARRAY, which is Rendered Rendered
    const [termTableData, setTermTableData] = useState([]); // DATA Rendering on Table (Displayed)
    useEffect(() => {
        renderTerms();
    }, [termSearchResults, selectedTerms]);
    const renderTerms = () => {
        const termData = []; // formatted to fit table
        termSearchResults.forEach((resultItem) => {
            let termSelected = false;
            // check against secondary filter (if term's class does NOT contain substring, then continue)
            if (
                searchClassFilterText === '' ||
                advancedSearch(searchClassFilterText, resultItem.classShortName)
                // resultItem.classShortName
                //     .toLowerCase()
                //     .includes(searchClassFilterText.toLowerCase())
            ) {
                // Check if tern is Selected, to determine if TermSelector should be Checked
                selectedTerms.forEach((term) => {
                    if (term.id === resultItem.id) {
                        termSelected = true;
                    }
                });
                // Build Table Data format (adding selected bool, and TermSelector component)
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
            }
        });
        setTermTableData(termData);
    };
    const removeTerm = (term) => {
        // const newSelectedTerms = selectedTerms;
        let newSelectedTerms = selectedTerms.filter(
            (item) => item.id !== term.id
        );
        setTermTableData([]);
        newSelectedTerms.sort((a, b) => a.id - b.id);
        setSelectedTerms(newSelectedTerms);
    };
    // const handleRemoveTerm = (term) => { // customized function when removing from Selected Terms section; above is called at checkmark remove

    // }

    // COSMETIC Loading indicator for Term Search
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
    // COSMETIC Loading indicator for Class Filter Search
    const { current: classSearchInstance } = useRef({});
    const [loadingClassSearch, setLoadingClassSearch] = useState(false);
    useEffect(() => {
        // setTermTableData([]);
        if (classSearchInstance.delayTimer) {
            clearTimeout(classSearchInstance.delayTimer);
        }
        if (searchClassFilterText === '') {
            setLoadingClassSearch(true);
            classSearchInstance.delayTimer = setTimeout(() => {
                setLoadingClassSearch(false);
                setTermTableData([]); // after 0.2 seconds, stop Loading Indicator and apply filter
                renderTerms();
            }, 200);
        }
        if (searchClassFilterText !== '') {
            setLoadingClassSearch(true);
            classSearchInstance.delayTimer = setTimeout(() => {
                setLoadingClassSearch(false); // after 0.6 seconds, stop Loading Indicator and apply filter
                setTermTableData([]);
                renderTerms();
            }, 600);
        } else {
            renderTerms();
            setLoadingClassSearch(false);
        }
    }, [searchClassFilterText]);

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
            classesSelected.sort((a, b) => a.id - b.id);
            setSelectedClasses(classesSelected);
            if (classesSelected.length > 0) {
                setTotalAmount(
                    (
                        info.basePrice +
                        100 * (classesSelected.length - 1)
                    ).toFixed(2)
                );
            } else if (classesSelected.length === 0) {
                setTotalAmount(0);
            }
        } else {
            setSelectedClasses([]);
            setTotalAmount(0);
            // setInfo({ ...info, classesSelected: [], amount: 0 });
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
        } else {
            setInfo({
                ...info,
                classesSelected: [],
                amount: 0,
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
            <div className={classes.formContainer}>
                <Typography gutterBottom>
                    A Trademark is registered under one or more{' '}
                    <b>NICE class(es)</b>. <br />
                    <br />
                    {`This Trademark application includes 1 (one) NICE Class applied to your Trademark. You can apply as many Terms as needed, as long as they're under the same NICE Class.`}
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
                <SearchField
                    loading={loading}
                    placeholder={
                        'Search for Terms to associate with your Trademark... '
                    }
                    setInputTo={setSearchTerm}
                />
                {searchTerm.length > 2 && termSearchResults.length > 0 && (
                    <Box className={classes.niceClassFilterText}>
                        <Typography>
                            Each term is associated with a NICE Class
                        </Typography>
                        <SearchField
                            loading={loadingClassSearch}
                            placeholder={
                                'Narrow results by filtering NICE Classes '
                            }
                            setInputTo={setSearchClassFilterText}
                        />
                    </Box>
                )}

                {(searchTerm.length > 2 || termSearchResults.length > 0) &&
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
                            {selectedClasses?.length > 0 ? (
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
                                ))
                            ) : (
                                <Typography>{'none'}</Typography>
                            )}
                        </List>
                    </CardContent>
                </Card>
                {/* ///////////////////////////total amount section /////////////////////////// */}

                {info.classesSelected.length > 0 && (
                    <ServiceSelect
                        info={info}
                        setInfo={setInfo}
                        selectedClasses={selectedClasses}
                        setTotalAmount={setTotalAmount}
                    />
                )}

                {info.classesSelected.length > 0 && <OrderAmount info={info} />}

                <Box className={classes.checkmarkContainer}>
                    <Checkmark value={validationProgress.amountNotZero} />
                </Box>

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
        margin: '10px',
        width: '93%',
        padding: '10px',
        [theme.breakpoints.up('md')]: {
            width: '60%',
            // padding: '0 2% ',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            // padding: '0 5% 2% 5%',
        },
    },
    formContainer: {
        border: '1px solid #696969',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        margin: '1%',
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
        backgroundColor: checkmarksTheme.transparentCard,
        display: 'flex',
        flexDirection: 'column',
        margin: '3% 0',
        padding: '5px',
        maxHeight: '600px',
        overflowY: 'scroll',
    },
    classTermList: {
        display: 'flex',
        flexDirection: 'column',
    },
    selectedTermListItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,
        width: '100%',
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
    checkmarkContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '2% 5%',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1%',
    },
    continueButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        marginLeft: '3%',
        width: '45%',
        height: '35px',
        fontSize: '16px',
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
        width: '45%',
        height: '35px',
        fontSize: '16px',
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
        display: 'none',
        backgroundColor: checkmarksTheme.transparentCard,
        color: checkmarksTheme.textActive,
        marginTop: '10%',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '5%',
        },
    },
}));
