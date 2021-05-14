import React, { useState } from 'react';
import { checkmarksTheme } from '../../styles/Themes';
import { Paper } from '@material-ui/core';
import ResultDetail from './ResultDetail';
import MuiVirtualizedTable from '../VirtualizedTable';

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

    const onFilterClick = (e) => {
        setFilterSelection(e.currentTarget.value);
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
