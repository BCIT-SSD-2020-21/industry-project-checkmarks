import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { checkmarksTheme } from '../../styles/Themes';
import {
    Button,
    Card,
    Fade,
    IconButton,
    Paper,
    TableCell,
    Typography,
} from '@material-ui/core';
import { AutoSizer, Column, Table } from 'react-virtualized';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ResultDetail from './ResultDetail';
import FilterMenu from '../FilterMenu';
import MuiVirtualizedTable from '../VirtualizedTable';
const styles = (theme) => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundColor: checkmarksTheme.bgDrawer,
        // padding: '5%',
    },
    table: {
        // temporary right-to-left patch, waiting for
        // https://github.com/bvaughn/react-virtualized/issues/454
        backgroundColor: checkmarksTheme.bgTransparent,
        // padding: '2%',
        // opacity: 0,
        // borderRadius: '25px',
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
            paddingRight:
                theme.direction === 'rtl' ? '0 !important' : undefined,
        },
        // backgroundColor: checkmarksTheme.bgDrawer,
    },
    tableRow: {
        backgroundColor: checkmarksTheme.bgTransparent,
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        // backgroundColor: 'red',
        backgroundColor: checkmarksTheme.bgPrimary,
        // margin: 'auto',
        display: 'flex',
        padding: '2px',
        justifyContent: 'center',
        fontSize: '10px',
        textAlign: 'center',
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

// MuiVirtualizedTable.propTypes = {
//     classes: PropTypes.object.isRequired,
//     columns: PropTypes.arrayOf(
//         PropTypes.shape({
//             dataKey: PropTypes.string.isRequired,
//             label: PropTypes.string.isRequired,
//             numeric: PropTypes.bool,
//             width: PropTypes.number.isRequired,
//         })
//     ).isRequired,
//     headerHeight: PropTypes.number,
//     onRowClick: PropTypes.func,
//     rowHeight: PropTypes.number,
// };

// const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

export default function SearchResults({ data }) {
    // const [detailedView, setDetailedView] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [filterSelection, setFilterSelection] = useState(null);
    const [menuSelection, setMenuSelection] = useState(null);

    // TM Types in data
    const dataTMTypes = [];
    data.map((tm) => {
        tm.tmTypeDescriptions.map((item) => {
            if (!dataTMTypes.includes(item)) {
                dataTMTypes.push(item);
            }
        });
    });
    // Statuses in data
    const dataStatuses = [];
    data.map((tm) => {
        if (!dataStatuses.includes(tm.statusDescEn)) {
            dataStatuses.push(tm.statusDescEn);
        }
    });
    // File Date options
    const sortOptions = ['Sort Ascending', 'Sort Descending'];

    // const rowClick = (e) => {
    //     console.log('clicked', e.target);
    // };
    const onFilterClick = (e) => {
        // console.log('filter clicked', e.currentTarget.value);
        setFilterSelection(e.currentTarget.value);
    };
    const onMenuSelection = (e) => {
        setMenuSelection(e.currentTarget.value);
    };

    return (
        <Paper
            style={{
                backgroundColor: checkmarksTheme.bgTransparent,
                height: (window.innerHeight * 2) / 5,
                width: '100%',
            }}
        >
            {selectedRow === null ? (
                <MuiVirtualizedTable
                    // style={{ height: 400, width: '100%' }}
                    rowCount={data.length} // row or data
                    rowGetter={({ index }) => data[index]} // row or data
                    onRowClick={(e) => setSelectedRow(e.index)}
                    onFilterClick={onFilterClick}
                    columns={[
                        {
                            width: (window.innerWidth * 1) / 3,
                            label: ['Title', '', onFilterClick, []],
                            dataKey: 'title',
                        },
                        {
                            width: (window.innerWidth * 1) / 6,
                            label: ['TM Types', '', onFilterClick, dataTMTypes],
                            dataKey: 'tmTypeDescriptions',
                        },
                        {
                            width: (window.innerWidth * 1) / 6,
                            label: ['Status', '', onFilterClick, dataStatuses],
                            dataKey: 'statusDescEn',
                        },
                        {
                            width: (window.innerWidth * 1) / 3,
                            label: [
                                'File Date',
                                '(yyyy-mm-dd)',
                                onFilterClick,
                                sortOptions,
                            ],
                            dataKey: 'fileDateFormatted',
                            // numeric: true,
                        },
                    ]}
                />
            ) : (
                <ResultDetail
                    data={data[selectedRow]}
                    setSelectedRow={setSelectedRow}
                />
            )}
        </Paper>
    );
}
