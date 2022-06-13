import React from 'react';
import ReactFlow, { addEdge, Controls, Background, useNodesState, useEdgesState } from 'react-flow-renderer';
import { nodes as initialNodes, edges as initialEdges } from '../initial-elements';
import NavigationPanel from './NavigationPanel';
import ButtonBar from './ButtonBar';
import ResourcesPanel from './ResourcesPanel';


const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);
// Props will likely take nodes, edges, etc as data
function Graph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  //this is the demo data.
  const demoNode = {
    "id": "2343k4j3i4jj43k",
    "name": "1.1 Introduction to Whole Numbers",
    "label": "Section",
    "ref": "https://openstax.org/books/elementary-algebra-2e/pages/1-1-introduction-to-whole-numbers",
    "description": "<h5>Content heading</h5> <div>This is the body of the content</div>",
    "learning_objectives": "<h5>This is the learing objective of the chapter</h5><div>This is the body of the learing objective.</div>",
    "url": "https://google.com"
  }

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      style={{ height: 1000, width: 1520 }}
    >
      <NavigationPanel />
      <ResourcesPanel node={demoNode} />
      <ButtonBar />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  )
}
export default Graph