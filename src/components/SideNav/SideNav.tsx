import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import navItems from "./NavItems";
import SideNavItem from "./SideNavItem";
import mainstackLogo from "../../assets/mainstack-logo.svg";
import userImg from "../../assets/user.svg";
import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <Box
      paddingTop="30px"
      display={{ xs: "none", sm: "none", lg: "block" }}
      borderRight="1px solid rgba(239, 241, 246, 1)"
      height="100%"
    >
      <Stack sx={{ cursor: "pointer" }} marginLeft="30px">
        <Avatar src={mainstackLogo} sx={{ width: "40px", height: "40px" }} />
      </Stack>
      {navItems.map((navItem, index) => {
        const { contents, section } = navItem;

        return (
          <Stack>
            <Stack key={index} gap={1}>
              <Typography
                fontSize="12px"
                variant="body1"
                component="p"
                fontWeight="500px"
                fontFamily="Work Sans', sans-serif"
                color="#545F7D"
                style={{ margin: "8px 5px", marginLeft: "30px" }}
              >
                {section && section}
              </Typography>

              {contents.map((content, index) => {
                return <SideNavItem key={index} {...content} />;
              })}
            </Stack>
          </Stack>
        );
      })}
      <Stack
        marginLeft="30px"
        marginTop="80px"
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ cursor: "pointer" }}
      >
        <Avatar
          src={userImg}
          sx={{ width: "32px", height: "32px", cursor: "pointer" }}
        />
        <p className={styles.user}>Blessing Daniels</p>
      </Stack>
    </Box>
  );
};

export default SideNav;
