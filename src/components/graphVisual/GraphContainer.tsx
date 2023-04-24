import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import infoIcon from "../../assets/info.svg";
import styles from "./GraphContainer.module.css";
import { Graph } from "./Grapgh";

const GraphContainer = () => {
  return (
    <div className={styles.graph_container}>
      <div className={styles.graph_info_container}>
        <h3>Page Views</h3>
        <Avatar className={styles.avatar} src={infoIcon} />
      </div>
      <p>All time</p>
      <h6>500</h6>
      <Graph />
    </div>
  );
};

export default GraphContainer;
