import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const PieChart = ({ tincome, texpense }) => {
  const data = {
    labels: ["T.Income", "T.Expense"],
    datasets: [
      {
        label: "Expense Chart",
        data: [tincome, texpense],
        backgroundColor: ["rgb(70,130,180)", "rgb(255,0,0)"],
      },
    ],
  };
  return (
    <>
      <div>
        <Pie data={data} />
      </div>
    </>
  );
};

export default PieChart;
