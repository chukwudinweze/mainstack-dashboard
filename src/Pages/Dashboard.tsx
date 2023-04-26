import React from "react";
import Header from "../components/Header/Header";
import GraphVisualize from "../components/graphVisual/GraphVisualize";
import PieChart from "../components/pieChartVisualize/PieChart";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import styles from "./Dashboard.module.css";
import SideNav from "../components/SideNav/SideNav";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Stack
        spacing={3}
        direction={{ lg: "row" }}
        className={styles.dashboard_page}
        marginLeft={{ xs: "10px", sm: "30px", lg: "0" }}
        marginRight={{ xs: "10px", sm: "10px", lg: "0" }}
      >
        <Stack flex={2.5}>
          <SideNav />
        </Stack>
        <Stack flex={12}>
          <Header title="Dashboard" user="Blessing" />
          <GraphVisualize />
          <PieChart />
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default Dashboard;
