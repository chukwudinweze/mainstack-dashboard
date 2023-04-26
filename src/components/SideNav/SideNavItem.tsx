import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import styles from "./SideNavItem.module.css";

const SideNavItem: React.FC<{ icon: string; label: string; link: string }> = ({
  icon,
  label,
  link,
}) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      <Stack
        direction="row"
        gap={1.3}
        sx={{
          padding: "5px 30px",
          cursor: "pointer",
          color: "#545F7D",
          transition: "color 0.2s ease-in-out",
          "&:hover": {
            color: "rgba(255, 84, 3, 1)",
            borderLeft: "4px solid rgba(255, 84, 3, 1)",
          },
        }}
      >
        <Avatar
          src={icon && icon}
          alt={label}
          sx={{ width: "15px", height: "14.63px" }}
          variant="square"
        />
        <Typography
          fontFamily="Work Sans, sans-serif"
          fontSize="16px"
          component="p"
          fontWeight="400"
          // lineHeight="18.77px"
        >
          {label && label}
        </Typography>
      </Stack>
    </NavLink>
  );
};

export default SideNavItem;
