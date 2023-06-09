import styles from "./Header.module.css";
import { Stack, Avatar } from "@mui/material";
import cloudIcon from "../../assets/cloud.png";
import MobileNav from "../SideNav/MobileNav";

interface headerPropTypes {
  title: string;
  user: string;
}

const Header = ({ title, user }: headerPropTypes) => {
  return (
    <header className={styles.header}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        display={{ xs: "flex", sm: "flex", lg: "none" }}
      >
        <h3>{title}</h3>

        <MobileNav />
      </Stack>
      <div className={styles.sub_heading}>
        <Stack spacing={1} alignItems="center" direction="row">
          <h3>Good Morning, {user}</h3>
          <Avatar className={styles.cloudIcon} src={cloudIcon} alt="cloud" />
        </Stack>
        <button>view analytics</button>
      </div>
      <p>Check out your dashboard summary.</p>
    </header>
  );
};

export default Header;
