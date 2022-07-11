import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const BarChart = ({ tincome, texpense }) => {
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
        <Bar data={data} />
      </div>
    </>
  );
};

export default BarChart;
