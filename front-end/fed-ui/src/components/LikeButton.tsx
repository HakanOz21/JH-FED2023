import React, { useState } from "react";
import Button from "@mui/material/Button";
import { indigo } from "@mui/material/colors";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "../App.css";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const colorBlue = indigo[700];

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <Button
      style={{
        maxWidth: "90px",
        color: colorBlue,
        borderColor: colorBlue,
        borderRadius: "15px",
      }}
      variant="outlined"
      onClick={handleLike}
      startIcon={<ThumbUpIcon />}
    >
      {like}
    </Button>
  );
};

export default LikeButton;
