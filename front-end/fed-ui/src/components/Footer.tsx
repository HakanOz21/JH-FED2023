import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <BottomNavigation className="footer">
      <Typography style={{ color: "#3f51b5" }} onClick={handleAboutClick}>
        About Us
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;