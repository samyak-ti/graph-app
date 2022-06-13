import React, { useState } from 'react';
import Draggable from "react-draggable";
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Button } from '@mui/material';
import ShowContent from './ShowContent';

// Props will likely include urls with some data to be viewed
function ResourcesPanel(props) {
  const [showResources, setShowResources] = useState(true);

  console.log(props.node);

  const minimizeElement = () => {
    console.log("HEY ")
    setShowResources(!showResources);
  }
  return (
    <div>
      {showResources ?
        <Draggable>
          <div id="resourcespanel" className="expandedResourcesPanel" >

            Resources Panel
            <Button onClick={minimizeElement}>
              <RemoveIcon />
            </Button>

            <ShowContent nodeContent={props.node} />
          </div>
        </Draggable>
        :
        <Draggable>

          <div id="resourcespanel" className="minimizedResourcesPanel">
            Resources Panel
            <Button onClick={minimizeElement}>
              <OpenInFullIcon />
            </Button>
          </div>
        </Draggable>
      }
    </div >
  )
}
export default ResourcesPanel