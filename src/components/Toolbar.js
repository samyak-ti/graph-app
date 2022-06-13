import React from 'react';
import { TextField } from '@mui/material';


function Toolbar () {

  return (
    <div id="toolbar" className="toolbar">
      <TextField
        label="Filter"
        size="small"
      > 
      </TextField>
      <TextField
        label="Search"
        size="small"
        className='search'
      >
      </TextField>
    </div>
  )
}
export default Toolbar