import React from "react";
import { Pie } from "react-chartjs-2";

interface DountModel {
  languages: object;
}

const DountLanguage: React.FC<DountModel> = ({ languages }) => {
  const totalPointsLanguage = Object.values(languages).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const percetageLanguage = Object.values(languages).map((value) => {
    const total = (value * 100) / totalPointsLanguage;

    return Math.round(total);
  });

  const data = {
    responsive: true,
    labels: Object.keys(languages),
    datasets: [
      {
        data: percetageLanguage,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{ responsive: true, maintainAspectRatio: true }}
    />
  );
};

export default DountLanguage;
