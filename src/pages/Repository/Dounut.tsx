import React from "react";
import { Pie } from "react-chartjs-2";
import colors from "../../components/Repository/colors.json";

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

  const languageColor: { [index: string]: any } = colors;

  const data = {
    responsive: true,
    labels: Object.keys(languages),
    datasets: [
      {
        data: percetageLanguage,
        backgroundColor: Object.values(languageColor).slice(0, 100),
        hoverBackgroundColor: Object.values(languageColor).slice(0, 100),
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          colorschemes: {
            scheme: "tableau.Tableau20",
          },
        },
      }}
    />
  );
};

export default DountLanguage;
