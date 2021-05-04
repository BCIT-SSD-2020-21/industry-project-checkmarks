import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';

export default function TermSelector({ number, selected, handler }) {
    const [checked, setChecked] = useState(selected);
    const handleSelection = (value) => {
        handler(value);
        setChecked(!checked);
    };

    return (
        <Checkbox
            value={number}
            checked={checked}
            onChange={(e) => handleSelection(e.currentTarget.value)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    );
}
