import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../App.css";

const LikeButton = () => {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <Button variant="outlined" onClick={handleLike}>
      {like} Likes
    </Button>
  );
};

export default LikeButton;
