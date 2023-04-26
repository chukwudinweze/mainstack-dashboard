import React, { useEffect } from "react";
import { ScriptableContext } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options } from "./graphOptions";
import useFetchData from "./useFetctData";
import styles from "./Graph.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function Graph() {
  const { fetchdata, responseData, error, loading } = useFetchData(
    "https://fe-task-api.mainstack.io/"
  );
  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  const formattedViews =
    responseData &&
    Object.entries(responseData.graph_data.views).map(([dateString, value]) => {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      });
      return { date: formattedDate, value };
    });

  const dateLabels = formattedViews?.map((views) => views.date);
  const graphDataValue = formattedViews?.map((views) => views.value);

  const data = {
    labels: dateLabels,

    datasets: [
      {
        fill: true,
        labels: dateLabels,
        data: graphDataValue,
        pointStyle: "circle",
        pointRadius: 0,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 700);
          gradient.addColorStop(0, "rgba(255, 84, 3, 0.2)");
          gradient.addColorStop(1, "rgba(255, 84, 3, 0)");
          return gradient;
        },
        borderColor: "rgba(255, 84, 3, 1)",
        borderWidth: 1,
      },
    ],
  };
  if (loading) {
    return <p className={styles.loading}>loading Graph...</p>;
  }
  if (error) {
    return <p className={styles.error}>Error fetching Graph</p>;
  }

  return (
    <div>
      <Line id="chart" options={options} data={data} />
    </div>
  );
}
