import React, { useState } from 'react';
import Draggable from "react-draggable";
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Button, TextField } from '@mui/material';

// TODO: Icons for minimizing/expanding should be right justified, actual hierarchy of data should be shown
// Props would be list of nodes, edges, etc. This can determine hierarchcy
function NavigationPanel() {
  const [showNav, setShowNav] = useState(true);

  const minimizeElement = () => {
    setShowNav(!showNav);
  }

  return (
    <div>
      {showNav ?
        <Draggable>
          <div className="expandedNavPanel">
            <div className='navTitle'>
              <div>
                Navigation
              </div>
              <Button onClick={minimizeElement}>
                <RemoveIcon />
              </Button>
            </div>
            <hr />
            <TextField
              label="Search"
            ></TextField>
            <div>Graph hierarchy here</div>
          </div>
        </Draggable>
        :
        <Draggable>
          <div className="minimizedNavPanel">
            Navigation
            <Button onClick={minimizeElement}>
              <OpenInFullIcon />
            </Button>
          </div>
        </Draggable>
      }
    </div>
  )
}
export default NavigationPanel