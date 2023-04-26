export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
  },
  scales: {
    x: {
      grid: {
        color: "transparent",
      },
    },
  },
};

export const optionse = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
  labels: {
    usePointStyle: true,
    pointStyle: "circle",
    padding: 20,
  },
};
