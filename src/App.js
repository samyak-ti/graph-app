import React from 'react';
import './App.css';

import Graph from './components/Graph'
import Toolbar from './components/Toolbar'

function OverviewFlow() {

  // //this is the demo data.
  // const demoNode = {
  //   "id": "2343k4j3i4jj43k",
  //   "name": "1.1 Introduction to Whole Numbers",
  //   "label": "Section",
  //   "ref": "https://openstax.org/books/elementary-algebra-2e/pages/1-1-introduction-to-whole-numbers",
  //   "description": "<h5>Content heading</h5> <div>This is the body of the content</div>",
  //   "learning_objectives": "<h5>This is the learing objective of the chapter</h5><div>This is the body of the learing objective.</div>",
  //   "url": "https://google.com"
  // }

  return (
    <div>
      <Toolbar />
      <Graph />
      {/* <ResourcesPanel node={demoNode} /> */}
      {/* the above component is added in the graph component. */}
    </div>
  );
};

export default OverviewFlow;
