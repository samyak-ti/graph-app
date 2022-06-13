import React from 'react';
import Draggable from "react-draggable";
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import OpenWithSharpIcon from '@mui/icons-material/OpenWithSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';


// Props would be list of nodes, edges, etc. This can determine hierarchcy
function ButtonBar () {

  return (
    <Draggable>
      <div className="buttonBar">
        <Button className="button"> 
          <AddCircleIcon/>
        </Button>
        <Button className="button">
          <AddSharpIcon/>
        </Button>
        <Button className="button">
          <EditSharpIcon/>
        </Button>
        <Button className="button">
          <OpenWithSharpIcon/>
        </Button>
        <Button className="button">
          <RemoveCircleSharpIcon/>
        </Button>
      </div>
    </Draggable>

  )
}
export default ButtonBar