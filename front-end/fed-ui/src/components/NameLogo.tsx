import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Button from "@mui/material/Button";
import { indigo } from "@mui/material/colors";
import Container from "@mui/material/Container";

function NameAndLogo() {
  const colorBlue = indigo[700];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fafafa" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <AutoStoriesIcon sx={{ mr: 1, color: "#3f51b5" }} />

          <Typography
            variant="h5"
            noWrap
            sx={{
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: ".1rem",
              textDecoration: "none",
              color: "#3f51b5",
            }}
          >
            BookMonkey
          </Typography>
          <Button
            style={{
              maxWidth: "90px",
              color: colorBlue,
              borderColor: colorBlue,
              borderRadius: "15px",
            }}
            variant="outlined"
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export { NameAndLogo };
