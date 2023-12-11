import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Typography from "@mui/material/Typography";
import "../App.css";

const Footer = () => {
  return (
    <BottomNavigation className="footer">
      <Typography style={{ color: "#3f51b5" }}>About.</Typography>
    </BottomNavigation>
  );
};

export default Footer;
