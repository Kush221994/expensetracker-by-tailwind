import * as React from "react";
import BarChart from "./barChart";
import LineChart from "./lineChart";
import PieChart from "./pieChart";
import FlowChart from "./flowChart";

const Chart = ({ tincome, texpense }) => {
  const [active, setActive] = React.useState("");
  return (
    <>
      <div className="w-2/5 flex flex-col">
        <div className=" flex flex-row gap-x-12 mt-2">
          <button
            className=" h-10 bg-green-700 rounded-md font-bold"
            onClick={() => setActive("BarChart")}
          >
            BarChart
          </button>
          <button
            className="h-10 bg-green-700 rounded-md font-bold"
            onClick={() => setActive("LineChart")}
          >
            LineChart
          </button>
          <button
            className="h-10 bg-green-700 rounded-md font-bold"
            onClick={() => setActive("PieChart")}
          >
            PieChart
          </button>
          <button className="h-10 bg-green-700 rounded-md font-bold">
            FlowChart
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {active === "BarChart" && (
            <BarChart tincome={tincome} texpense={texpense} />
          )}
          {active === "LineChart" && (
            <LineChart tincome={tincome} texpense={texpense} />
          )}
          {active === "PieChart" && (
            <PieChart tincome={tincome} texpense={texpense} />
          )}
          {active === "FlowChart" && (
            <FlowChart tincome={tincome} texpense={texpense} />
          )}
        </div>
      </div>
    </>
  );
};

export default Chart;
