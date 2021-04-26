import React from 'react';
import { FormControl, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import InputAdornment from '@material-ui/core/InputAdornment';

const TrademarkAppSearchBar = () => {
    return (
        <FormControl>
            <Input
                type="text"
                startAdornment={
                    <InputAdornment position="start">
                        <CreateIcon />
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export default TrademarkAppSearchBar;
