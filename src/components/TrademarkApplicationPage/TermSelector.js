import React, { useState, useEffect, useRef } from 'react';
import { Checkbox } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';

export default function TermSelector({ number, selected, handler }) {
    const [checked, setChecked] = useState(selected);
    const handleSelection = (value) => {
        handler(value);
        setChecked(!checked);
    };
    // console.log('checked: ', checked);

    return (
        <Checkbox
            value={number}
            checked={checked}
            onChange={(e) => handleSelection(e.currentTarget.value)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    );
}
