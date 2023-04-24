import React from "react";
import Header from "./components/Header/Header";
import GraphVisualize from "./components/graphVisual/GraphVisualize";
import PieChart from "./components/pieChartVisualize/PieChart";

const App = () => {
  return (
    <div>
      <Header title="Dashboard" user="Blessing" />
      <GraphVisualize />
      <PieChart />
    </div>
  );
};

export default App;
