import React from "react";
import { ElementsInNavbar } from "./ElementsInNavbar";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fafafa" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <ElementsInNavbar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
