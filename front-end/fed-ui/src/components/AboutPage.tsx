import React from "react";
import "../App.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are a passionate team dedicated to
          providing high-quality content and services. Explore our virtual
          bookstore where you'll discover a vast collection of captivating
          books. From thrilling novels to insightful non-fiction and enchanting
          children's literature, we have something special for every reader.
          Dive into the world of literature with us, where there's a perfect
          book waiting for everyone.
        </p>
        <div className="icon-container">
          <TwitterIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;