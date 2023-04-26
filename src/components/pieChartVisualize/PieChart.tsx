import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useFetchData from "../graphVisual/useFetctData";
import Nigeriaflag from "../../assets/nigeriaFlag.svg";
import Germanyflag from "../../assets/germany.png";
import UKflag from "../../assets/united-kingdom.png";
import GhanaFlag from "../../assets/ghana.png";
import FinlandFlag from "../../assets/finland.png";
import googleIcon from "../../assets/google.png";
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook.png";
import linkedIn from "../../assets/linkedin.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styles from "./PieChart.module.css";

interface CountryFlagType {
  [key: string]: string;
  Nigeria: string;
  Germany: string;
  Ghana: string;
  Finland: string;
  "United Kingdom": string;
}

const COUNTRY_FLAGS: CountryFlagType = {
  Germany: Germanyflag,
  Ghana: GhanaFlag,
  Finland: FinlandFlag,
  "United Kingdom": UKflag,
  Nigeria: Nigeriaflag,
};

interface MediaIconType {
  [key: string]: string;
  google: string;
  instagram: string;
  facebook: string;
  linkedin: string;
}

const MEDIA_ICONS: MediaIconType = {
  google: googleIcon,
  instagram: instagramIcon,
  facebook: facebookIcon,
  linkedin: linkedIn,
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "left" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
      },
    },
    elements: {
      arc: {
        borderWidth: 4,
        borderColor: "grey",
      },
    },
  },
};
const backgroundColor = [
  "rgba(89, 158, 234, 1)",
  "rgba(15, 183, 122, 1)",
  "rgba(250, 183, 10, 1)",
  "rgba(240, 148, 104, 1)",
  "rgba(132, 79, 246, 1)",
];

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const { fetchdata, responseData, error, loading } = useFetchData(
    "https://fe-task-api.mainstack.io/"
  );
  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  const counts = responseData?.top_locations.map(
    (locations) => locations.count
  );
  const country = responseData?.top_locations.map(
    (locations) => locations.country
  );
  const percent = responseData?.top_locations.map(
    (locations) => locations.count
  );

  const topSocialMediaCounts = responseData?.top_sources.map(
    (counts) => counts.count
  );

  const modifiedCountryArray = responseData?.top_locations
    ?.slice(0, 5)
    .map((location, index) => {
      const { country, percent } = location;
      return {
        name: country,
        flag: COUNTRY_FLAGS[country],
        percent,
        backgroundColor: backgroundColor[index],
      };
    });

  const modifySocialMediaArray = responseData?.top_sources
    ?.slice(0, 5)
    .map((sources, index) => {
      const { source, percent } = sources;
      return {
        name: source,
        icon: MEDIA_ICONS[source],
        percent,
        backgroundColor: backgroundColor[index],
      };
    });

  const modifiedCountryLabel = modifiedCountryArray?.map((country) => (
    <Stack
      alignItems="center"
      direction="row"
      marginLeft={{ xs: "70px", sm: "0" }}
      marginTop="10px"
      spacing={1.5}
      className={styles.piechart_label}
    >
      <Avatar
        src={country.flag}
        sx={{ width: "21px", height: "15px" }}
        variant="square"
      />
      <Stack direction="row" spacing={1} className={styles.piechart_label_name}>
        <p>{`${country.name}`}</p>{" "}
        <p className={styles.chart_percentage}>{`${country.percent}%`}</p>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        width="10px"
        height="10px"
        borderRadius="50%"
        bgcolor={country.backgroundColor}
        className={styles.piechart_label_bullet_point}
      ></Stack>
    </Stack>
  ));

  const modifiedMediaLabel = modifySocialMediaArray?.map((socialMedia) => (
    <Stack
      alignItems="center"
      direction="row"
      marginLeft={{ xs: "70px", sm: "0" }}
      marginTop="10px"
      spacing={1.5}
      className={styles.piechart_label}
    >
      <Avatar
        src={socialMedia.icon}
        sx={{ width: "21px", height: "15px" }}
        variant="square"
      />
      <Stack direction="row" spacing={1} className={styles.piechart_label_name}>
        <p className={styles.labelName}>{`${socialMedia.name}`}</p>
        <p className={styles.chart_percentage}>{`${socialMedia.percent}%`}</p>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        width="10px"
        height="10px"
        borderRadius="50%"
        bgcolor={socialMedia.backgroundColor}
        className={styles.piechart_label_bullet_point}
      ></Stack>
    </Stack>
  ));

  const data = {
    datasets: [
      {
        label: "counts",
        data: counts,
        radius: 100,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  };
  const socialMediaDtata = {
    datasets: [
      {
        label: "counts",
        data: topSocialMediaCounts,
        radius: 100,
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  if (loading) {
    return <p className={styles.loading}>Loading charts...</p>;
  }

  if (error) {
    return <p className={styles.error}>Error Loading Charts</p>;
  }

  if (!counts || !country || !percent) {
    return <p>Waiting for Data...</p>;
  }
  return (
    <Stack
      className={styles.piechart_session}
      width="100%"
      direction={{ xs: "column", sm: "column", lg: "row" }}
      spacing={1}
      justifyContent="center"
      paddingBottom="50px"
      marginTop="50px"
    >
      <div className={styles.piechart_wrapper}>
        <Stack
          className={styles.piechart_heading}
          direction="row"
          justifyContent="space-between"
        >
          <p>Top Locations</p>
          <button>View full results</button>
        </Stack>
        <Stack
          width={{ xs: "100%", sm: "100%", lg: "50%" }}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", sm: "column", lg: "row" }}
        >
          <Stack width="100%" display={{ xs: "none", sm: "none", lg: "flex" }}>
            {modifiedCountryLabel}
          </Stack>
          <Doughnut data={data} options={options} />
        </Stack>
        <Stack
          direction="column"
          //   marginLeft={{ xs: "20px", sn: "500px" }}
          display={{ xs: "flex", sm: "flex", lg: "none" }}
          alignItems="center"
        >
          <div> {modifiedCountryLabel}</div>
        </Stack>
      </div>
      <div className={styles.piechart_wrapper}>
        <Stack
          className={styles.piechart_heading}
          direction="row"
          justifyContent="space-between"
        >
          <p>Top Referral Sources</p>
          <button>View full results</button>
        </Stack>
        <Stack
          width={{ xs: "100%", sm: "100%", lg: "50%" }}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", sm: "column", lg: "row" }}
        >
          <Stack width="100%" display={{ xs: "none", sm: "none", lg: "flex" }}>
            {modifiedMediaLabel}
          </Stack>
          <Doughnut data={socialMediaDtata} options={options} />
        </Stack>
        <Stack
          alignItems="center"
          marginLeft="20px"
          display={{ xs: "flex", sm: "flex", lg: "none" }}
        >
          <div>{modifiedMediaLabel}</div>
        </Stack>
      </div>
    </Stack>
  );
}
