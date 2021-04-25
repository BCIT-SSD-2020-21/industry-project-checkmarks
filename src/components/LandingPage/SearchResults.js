import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Paper, TableCell, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { AutoSizer, Column, Table } from 'react-virtualized';

const styles = (theme) => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    table: {
        // temporary right-to-left patch, waiting for
        // https://github.com/bvaughn/react-virtualized/issues/454
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
            paddingRight:
                theme.direction === 'rtl' ? '0 !important' : undefined,
        },
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        // backgroundColor: 'red',
        fontSize: '10px',
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <Fade in={true} exit={true} timeout={1000}>
                <TableCell
                    component="div"
                    className={clsx(classes.tableCell, classes.flexContainer, {
                        [classes.noClick]: onRowClick == null,
                    })}
                    variant="body"
                    style={{ height: rowHeight }}
                    align={
                        (columnIndex != null && columns[columnIndex].numeric) ||
                        false
                            ? 'right'
                            : 'left'
                    }
                >
                    {cellData}
                </TableCell>
            </Fade>
        );
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(
                    classes.tableCell,
                    classes.flexContainer,
                    classes.noClick
                )}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const {
            classes,
            columns,
            rowHeight,
            headerHeight,
            ...tableProps
        } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight}
                        className={classes.table}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            numeric: PropTypes.bool,
            width: PropTypes.number.isRequired,
        })
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

export default function SearchResults({ data }) {
    // Sample DATA
    // const data = [
    //     ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    //     ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    //     ['Eclair', 262, 16.0, 24, 6.0],
    //     ['Cupcake', 305, 3.7, 67, 4.3],
    //     ['Gingerbread', 356, 16.0, 49, 3.9],
    // ];

    // function createData(id, dessert, calories, fat, carbs, protein) {
    //     return { id, dessert, calories, fat, carbs, protein };
    // }

    // console.log('data prop: ', data);
    // console.log('item: ', data[0]);
    // FORMATTER
    // let formattedData = [];
    // const formatData = (data) => {
    //     data.forEach((trademark) => {
    //         let formattedDate = trademark.fileDate.substring(0, 10);
    //         // console.log('formattedDate: ', formattedDate);
    //         formattedData.push({
    //             ...trademark,
    //             fileDate: formattedDate,
    //         });
    //         // return {...data, fileDate: }
    //     });
    // };
    // formattedData = formatData(data);
    // console.log('data: ', data);
    // console.log('formattedData: ', formattedData);
    // function createData(id, dessert, calories, fat, carbs, protein) {
    //     return { id, dessert, calories, fat, carbs, protein };
    // }

    // const rows = []; // array of objects
    // //  NUMBER OF ROWS Input
    // for (let i = 0; i < 3; i += 1) {
    // const randomSelection = data[Math.floor(Math.random() * data.length)];
    // rows.push(createData(i, ...randomSelection)); // randomSelection or data
    // }

    // console.log("rows (default): ", rows)

    return (
        <Paper style={{ height: (window.innerHeight * 2) / 5, width: '100%' }}>
            <VirtualizedTable
                // style={{ height: 400, width: '100%' }}
                rowCount={data.length} // row or data
                rowGetter={({ index }) => data[index]} // row or data
                columns={[
                    {
                        width: (window.innerHeight * 1) / 2,
                        label: 'Title',
                        dataKey: 'title',
                    },
                    {
                        width: (window.innerHeight * 1) / 4,
                        label: 'Status',
                        dataKey: 'statusDescEn',
                        // numeric: true,
                    },
                    {
                        width: (window.innerHeight * 1) / 4,
                        label: 'File Date (yyyy-mm-dd)',
                        dataKey: 'fileDateFormatted',
                        // numeric: true,
                    },
                ]}
            />
        </Paper>
    );
}
