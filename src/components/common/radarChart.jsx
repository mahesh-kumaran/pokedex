import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = (props) => {
  const { chartLabels, chartData, chartTitle } = props;

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: chartTitle,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: chartData,
      },
    ],
  };

  if (data.chartLabels && data.chartLabels.length === 0) {
    return;
  }

  return (
    <div
      style={{
        width: "330px",
        height: "350px",
        position: "absolute",
        top: "25px",
        right: "28px",
        padding: "10px",
        backgroundColor: "white",
      }}
    >
      {/* <Radar key={key} data={data} /> */}
    </div>
  );
};

export default RadarChart;
