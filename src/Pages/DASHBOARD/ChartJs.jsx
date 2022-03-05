import React, { useState } from "react";
import { Chart } from "react-chartjs-2";
import { userDataModel } from "./userChartDataModel";
import { Chart as ChartJS, defaults } from "chart.js";

const Charts = () => {
  const [userData, setUserData] = useState({
    labels: userDataModel.map((user) => user.year),
    datasets: [
      {
        labels: "S",
        data: userDataModel.map((udi) => udi.staff),
      },
    ],
  });
  return (
    <>
      <Chart type="line" data={userData} />
    </>
  );
};

export default Charts;
