import React from 'react';
import { FormControl, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const TrademarkAppSearchBar = () => {
  return (
    <FormControl>
      <Input
        placeholder="search trademark"
        type="text"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default TrademarkAppSearchBar;
