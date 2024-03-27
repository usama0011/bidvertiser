import React from "react";
import { Bubble } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ChartComponent = () => {
  const data = {
    datasets: [
      {
        label: "Total Visits",
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 30, y: 20, r: 25 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  // Define options for the bubble chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div style={{ padding: "15px 0px" }}>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
