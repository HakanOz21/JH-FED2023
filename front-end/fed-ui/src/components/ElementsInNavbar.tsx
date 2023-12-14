import React from "react";
import Typography from "@mui/material/Typography";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Button from "@mui/material/Button";
import { indigo } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function ElementsInNavbar() {
  const colorBlue = indigo[700];
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <AutoStoriesIcon sx={{ mr: 1, color: "#3f51b5" }} />
        <Typography
          variant="h5"
          noWrap
          sx={{
            fontWeight: 500,
            letterSpacing: ".1rem",
            textDecoration: "none",
            color: "#3f51b5",
          }}
        >
          BookMonkey
        </Typography>
      </div>
      <div>
        <Button
          style={{
            maxWidth: "110px",
            margin: "0 10px",
            color: colorBlue,
            borderColor: colorBlue,
            borderRadius: "15px",
          }}
          variant="outlined"
          onClick={() => navigate(`/books/add`)}
        >
          Add Book
        </Button>
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
      </div>
    </div>
  );
}

export { ElementsInNavbar };
