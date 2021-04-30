import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Card,
    List,
    ListItem,
    ListItemText,
    Typography,
    Button,
    TextField,
} from '@material-ui/core';
import { searchTerms } from '../../services/cipo';
import sampleTermSearch from '../../services/sampleTermSearch.json';

export default function GoodsAndServices({ navigation }) {
    const classes = useStyles();

    const [terms, setTerms] = useState([]); // complete info on each term
    const [termTableData, setTermTableData] = useState([]); // used to render on Table
    // const [selectedClassNumbers, setSelectedClassNumbers] = useState([]);

    const [classShortNames, setClassShortNames] = useState([]); // needed?
    const [selectedClasses, setSelectedClasses] = useState([]); // rendered on Selected Rerms summary
    const [selectedTerms, setSelectedTerms] = useState([]); // rendered on Selected Rerms summary
    const [searchError, setSearchError] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // user's search
    const [open, setOpen] = useState(false); // dialog box showing when no terms selected

    const [totalAmount, setTotalAmount] = useState(0);

    // Below Commented Code Block Here (Ref# 12345678)
    // Temporary Test Data: services/sampleTermSearch.json
    // console.log('sampleTermSearch: ', sampleTermSearch.result);
    const getSearchTerms = async () => {
        // GET request to API - simulated with fake data: sampleTermSearch
        const termData = []; // formatted to fit table
        sampleTermSearch.result.forEach((result) => {
            // format to fit table
            result.resultsReturned.map((term) => {
                let termTableDataFormat = {
                    ...term,
                    id: term.termNumber,
                    termName: term.termName,
                    termClass: term.niceClasses[0].number,
                    classShortName: term.niceClasses[0].descriptions[0].name,
                };
                termData.push(termTableDataFormat);
            });
            setTermTableData(termData);
        });
    };
    // console.log('terms: ', terms);
    console.log('termTableData:', termTableData);
    const addSelectedTerms = (evt, data) => {
        console.log('addSelectedTerms clicked');
        console.log('evt: ', evt);
        console.log('data: ', data);
        setSelectedTerms(data);
    };
    const removeTerm = (term) => {
        console.log('remove term', term);
        // const newSelectedTerms = selectedTerms;
        let newSelectedTerms = selectedTerms.filter(
            (item) => item.termNumber !== term.termNumber
        );
        setSelectedTerms(newSelectedTerms);
    };
    console.log('selectedTerms: ', selectedTerms);
    // filter selectedTerms, get list of selected classes (no duplicates)
    useEffect(() => {
        if (selectedTerms) {
            // TM Types in data
            // const dataTMTypes = [];
            const classesSelected = [];
            selectedTerms.map((term) => {
                console.log('useEffect, term: ', term);
                if (classesSelected.length === 0) {
                    classesSelected.push(term.niceClasses[0]);
                } else {
                    classesSelected.forEach((niceClass) => {
                        console.log('useEffect, niceClass: ', niceClass);
                        if (niceClass.number === term.termClass) {
                        } else classesSelected.push(term.niceClasses[0]);
                    });
                }
                // if (!classesSelected.includes(term.termClass)) {
                //     classesSelected.push(term.niceClasses[0]);
                // }
            });
            setSelectedClasses(classesSelected);
            if (classesSelected.length > 0) {
                setTotalAmount(
                    (1500 + 100 * (classesSelected.length - 1)).toFixed(2)
                );
            }
        }
    }, [selectedTerms, totalAmount]);
    console.log('setSelectedClasses: ', selectedClasses);
    console.log('totalAmount: ', totalAmount);

    console.log(
        'index test: ',
        selectedTerms[selectedClasses?.indexOf(selectedClasses[0]?.number)]
    );

    return (
        // let amountText = '$' + 1500;
        // let additionalNICE = '';

        // if (this.state.selectedClasses.length > 1) {
        //     amountText =
        //         '$' +
        //         String(1500 + (this.state.selectedClasses.length - 1) * 100);
        //     additionalNICE =
        //         '$1500 base fee + ' +
        //         String(this.state.selectedClasses.length - 1) +
        //         ' additional NICE Classes.';
        // }
        // return (
        <Card className={classes.card}>
            <h1 className={classes.title}>Goods and Services</h1>
            <div className={classes.formContainer}>
                <Typography gutterBottom>
                    Please select the NICE Class and Terms you want to register
                    your trademark under.
                    <p>
                        <b>Please Note:</b> You are allowed selections from 1
                        NICE Class, any additional NICE Classes will cost an
                        additional $100.
                    </p>
                </Typography>

                <div>
                    {/* ///////////////////////////search trademark terms/////////////////////////// */}
                    <h3>Search for your Trademark Terms</h3>
                    <div className={classes.searchTermsContainer}>
                        <TextField
                            id="outlined-basic"
                            placeholder="Enter a general term for your good/service "
                            label="Search"
                            fullWidth
                            variant="outlined"
                            error={searchError != ''}
                            helperText={searchError}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            // onChange={handleTextFieldChange}
                        />
                        <Button
                            variant="contained"
                            className={classes.searchTermsButton}
                            onClick={getSearchTerms}
                        >
                            Search
                        </Button>
                    </div>

                    {/* /////////////////////////// Terms List Table /////////////////////////// */}
                    <MaterialTable
                        title="Terms List"
                        columns={[
                            {
                                title: 'Term ID',
                                field: 'id',
                                cellStyle: {
                                    minWidth: 10,
                                    padding: 10,
                                },
                                headerStyle: {
                                    minWidth: 10,
                                    padding: 10,
                                },
                            },
                            { title: 'Term Name', field: 'termName' },
                            { title: 'NICE Class', field: 'termClass' },
                            {
                                title: 'NICE Class Description',
                                field: 'classShortName',
                            },
                        ]}
                        data={termTableData}
                        options={{
                            selection: true,
                            showSelectAllCheckbox: false,
                        }}
                        actions={[
                            {
                                tooltip: 'Add All Selected Terms/Classes',
                                icon: () => (
                                    <Button
                                        // onClick={() => addSelectedTerms()}
                                        variant="contained"
                                        component="label"
                                        color="primary"
                                    >
                                        Add selected items
                                    </Button>
                                ),
                                onClick: (evt, data) =>
                                    addSelectedTerms(evt, data),
                                // this.handleAdd(data),
                            },
                        ]}
                    />
                    {/* ///////////////////////////selected terms section /////////////////////////// */}
                    <Card className={classes.selectedTerms}>
                        <CardContent>
                            <Typography variant="h6">
                                <b>Selected Terms:</b>
                            </Typography>

                            <List>
                                {selectedClasses?.map((niceClass, index) => (
                                    <div key={index}>
                                        <h4>
                                            {
                                                // Selected Class Heading  (Number + Shortmame)
                                                'Class: ' +
                                                    niceClass.name +
                                                    ' - ' +
                                                    niceClass?.descriptions[0]
                                                        .shortname
                                                // this.getClassShortName(
                                                //     classNum
                                                // )
                                            }
                                        </h4>
                                        <ListItem className="termDisplay">
                                            {selectedTerms
                                                // [selectedClasses?.indexOf(
                                                //         classNum.number)]?
                                                .map((term, index) => {
                                                    if (
                                                        term.termClass ===
                                                        niceClass.number
                                                    ) {
                                                        return (
                                                            <div
                                                                key={index}
                                                                style={{
                                                                    margin:
                                                                        '4px',
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    primary={
                                                                        'Term:'
                                                                    }
                                                                    secondary={
                                                                        term.termName
                                                                    }
                                                                />
                                                                <Button
                                                                    color="secondary"
                                                                    variant="contained"
                                                                    onClick={() =>
                                                                        removeTerm(
                                                                            term
                                                                        )
                                                                    }
                                                                    // onClick={() =>
                                                                    //     this.handleRemove(
                                                                    //         classNum,
                                                                    //         term
                                                                    //     )
                                                                    // }
                                                                >
                                                                    Remove
                                                                </Button>
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
                    <Card className={classes.amount}>
                        <CardContent>
                            <Typography variant="h6">
                                <b>Amount:</b>
                            </Typography>
                            <Typography variant="body1" component="p">
                                {/* {additionalNICE} */}
                                {`$${totalAmount.toString()}`}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Alert severity="info" className={classes.alert}>
                        Helper section with brief legal information, assisting
                        the client through the process.
                    </Alert>
                </div>
                <div className={classes.buttonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.backButton}
                        onClick={() => navigation.previous()}
                    >
                        Back
                    </Button>
                    <Button
                        className={classes.continueButton}
                        type="submit"
                        variant="contained"
                        onClick={() => navigation.next()}
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
                        // onClick={this.handleClose}
                    >
                        Back
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        // onClick={this.continue}
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
        margin: '3%',
        width: '70%',
        border: '1px solid #696969',
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
        margin: '3%',
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
    },
    amount: {
        margin: '3% 0',
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

// From Above: (Ref# 12345678)
// constructor(props) {
//     super(props);
//     this.clickContinue = this.clickContinue.bind(this);

//     this.state = {
//         terms: [],
//         classShortNames: [],
//         selectedClasses: [],
//         selectedTerms: [],
//         searchTerm: '',
//         searchError: '',
//         open: false,
//     };
// }

// componentDidMount() {
//     if (this.props.values.classes.length > 0) {
//         this.setState({
//             selectedClasses: this.props.values.classes.slice(),
//         });
//     }
//     if (this.props.values.terms.length > 0) {
//         this.setState({
//             selectedTerms: this.props.values.terms.slice(),
//         });
//     }
//     this.fetchClassShortName();
// }

// const clickContinue = (e) => {
//     if (selectedTerms.length == 0) {
//       setOpen(true)
//     } else {
//         this.continue(e);
//     }
// };

//const continue = (e) => {
//     e.preventDefault();
//     this.props.handler('classes', this.state.selectedClasses);
//     this.props.handler('terms', this.state.selectedTerms);
//     this.changeAmount();
//     this.props.nextStep();
// };

// back = (e) => {
//     e.preventDefault();
//     this.props.prevStep();
// };

// changeAmount() {
//     var newAmount = 150000;
//     if (this.state.selectedClasses.length > 1) {
//         newAmount += (this.state.selectedClasses.length - 1) * 100 * 100;
//     }
//     this.props.handler('amount', newAmount);
// }

// handleClose = () => {
//     this.setState({ open: false });
// };

// //Checks for any speical characters in the search string. Prints error message if true.
// validateSearchString() {
//     let searchError = '';
//     if (!this.state.searchTerm) {
//         searchError = 'Please enter a word that describes your trademark';
//     }
//     if (this.state.searchTerm.includes('/')) {
//         searchError = "Your search cannot include '/'";
//     }
//     if (
//         this.state.searchTerm.includes('.') ||
//         this.state.searchTerm.includes(';') ||
//         this.state.searchTerm.includes('$') ||
//         this.state.searchTerm.includes(',') ||
//         this.state.searchTerm.includes(':') ||
//         this.state.searchTerm.includes('?') ||
//         this.state.searchTerm.includes('@') ||
//         this.state.searchTerm.includes('#') ||
//         this.state.searchTerm.includes('!') ||
//         this.state.searchTerm.includes('&') ||
//         this.state.searchTerm.includes('*') ||
//         this.state.searchTerm.includes('(') ||
//         this.state.searchTerm.includes("'") ||
//         this.state.searchTerm.includes(')') ||
//         this.state.searchTerm.includes('"') ||
//         this.state.searchTerm.includes('}') ||
//         this.state.searchTerm.includes('-') ||
//         this.state.searchTerm.includes('{') ||
//         this.state.searchTerm.includes('%')
//     ) {
//         searchError = 'Please do not include any special characters';
//     }
//     if (searchError) {
//         this.setState({ searchError });
//         return false;
//     } else {
//         this.setState({ searchError });
//     }
//     return true;
// }

// //Fetches the term information from the backend web api
// getSearchTerms = () => {
//     var searchString = this.state.searchTerm;
//     if (this.validateSearchString()) {
//         let url =
//             this.props.values.checkmarksApiUrl +
//             'cipo/GetTermDataByString/' +
//             searchString;
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => {
//                 this.setState({
//                     terms: data.terms,
//                 });
//             });
//     }
// };

// handleTextFieldChange = (event) => {
//     this.setState({
//         searchTerm: event.target.value,
//     });
// };

// //Checks if the term has already been entered in the list
// isDupTerm(termList, term) {
//     if (termList.length == 0) {
//         return false;
//     } else {
//         var i;
//         var x;
//         for (i = 0; i < termList.length; i++) {
//             for (x = 0; x < termList[i].length; x++) {
//                 if (termList[i][x] == term) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// }

// //Checks for any duplicate classes. If true, returns its index, else returns -1
// checkDupClass(classList, newClassNum) {
//     var i;
//     for (i = 0; i < classList.length; i++) {
//         if (classList[i] == newClassNum) {
//             return i;
//         }
//     }
//     return -1;
// }

// async fetchClassShortName() {
//     let tempShortNames = [];
//     let url = this.props.values.checkmarksApiUrl + 'cipo/GetAllClasses/';
//     await fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             var i;
//             for (i = 0; i < data.classes.length; i++) {
//                 tempShortNames.push(data.classes[i].name);
//             }
//         });
//     this.setState({
//         classShortNames: tempShortNames,
//     });
// }

// getClassShortName(index) {
//     return this.state.classShortNames[index - 1];
// }

// //Adds the term and class into the selectedTerms and selectedClasses lists, while also checking for duplicates
// handleAdd(data) {
//     var tempClassList = this.state.selectedClasses.slice(); //Slice returns a copy of array rather than a reference
//     var tempTermList = this.state.selectedTerms.slice();

//     data.forEach((element) => {
//         var classIndex = this.checkDupClass(
//             tempClassList,
//             element.termClass
//         );
//         if (classIndex == -1) {
//             tempClassList.push(element.termClass);
//             tempTermList.push(Array(element.termName));
//         } else {
//             if (!this.isDupTerm(tempTermList, element.termName)) {
//                 tempTermList[classIndex].push(element.termName);
//             }
//         }
//     });

//     this.setState({
//         selectedClasses: tempClassList,
//         selectedTerms: tempTermList,
//     });
// }

// //Removes the term from the list, and removes the class if there are no more terms left for that class.
// handleRemove(classNumber, term) {
//     var tempClassList = this.state.selectedClasses.slice();
//     var tempTermList = this.state.selectedTerms.slice();
//     var classIndex = this.state.selectedClasses.indexOf(classNumber);

//     for (var i = 0; i < tempTermList[classIndex].length; i++) {
//         if (tempTermList[classIndex][i].localeCompare(term) == 0) {
//             tempTermList[classIndex].splice(i, 1);
//         }
//     }

//     if (tempTermList[classIndex].length == 0) {
//         tempTermList.splice(classIndex, 1);
//         tempClassList.splice(classIndex, 1);
//     }

//     this.setState({
//         selectedClasses: tempClassList,
//         selectedTerms: tempTermList,
//     });
// }
