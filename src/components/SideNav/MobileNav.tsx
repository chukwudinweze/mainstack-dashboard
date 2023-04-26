import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import navItems from "./NavItems";
import { Stack, Typography } from "@mui/material";
import SideNavItem from "./SideNavItem";
import MenuIcon from "@mui/icons-material/Menu";
import userImg from "../../assets/user.svg";
import mainstackLogo from "../../assets/mainstack-logo.svg";

type Anchor = "left";

export default function MobileNav() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      display={{ xs: "block", sm: "block", lg: "none" }}
      sx={{ minWidth: "230px" }}
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
                style={{ margin: "8px 5px" }}
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
        <p>Blessing Daniels</p>
      </Stack>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
