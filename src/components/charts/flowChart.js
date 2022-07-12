import React, { useState } from "react";
import ReactFlow from "react-flow-renderer";
import IncomeNode from "./incomeNode";
import ExpenseNode from "./expenseNode";

const reactFlowStyle = {
  background: "red",
  width: "45%",
  height: 300,
  marginTop: "10px",
};
const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: <b>"Expense Chart"</b> },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Income</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    // type: "output",
    data: { label: "Expenses" },
    position: { x: 400, y: 125 },
  },
  {
    id: "4",
    // you can also pass a React component as a label
    data: { label: <IncomeNode /> },
    position: { x: 100, y: 250 },
  },
  {
    id: "5",
    // you can also pass a React component as a label
    data: { label: <ExpenseNode /> },
    position: { x: 400, y: 250 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  // { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
];
const FlowChart = () => {
  // const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        style={reactFlowStyle}
      />
    </div>
  );
};

export default FlowChart;
