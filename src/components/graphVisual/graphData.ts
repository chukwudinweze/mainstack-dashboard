import { ScriptableContext } from "chart.js";

const labels = [
  "18 Dec",
  "19 Dec",
  "20 Dec",
  "21 Dec",
  "22 Dec",
  "23 Dec",
  "24 Dec",
];

export const data = {
  labels,

  datasets: [
    {
      fill: true,
      labels,
      data: [2, 5, 6, 7, 7],
      pointStyle: "circle",
      pointRadius: 0,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 50);
        gradient.addColorStop(0, "rgba(255, 84, 3, 0.2)");
        gradient.addColorStop(1, "rgba(255, 84, 3, 0)");
        return gradient;
      },
      borderColor: "rgba(239, 44, 90, 1)",
      borderWidth: 1,
    },
  ],
};
