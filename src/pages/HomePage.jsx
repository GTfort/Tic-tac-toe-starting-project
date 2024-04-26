import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import HumanVsHuman from "../components/HVH";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the game</h1>
      <p>Choose your opponent</p>
      <Link className="home-page-link" to="/vAi">
        Play Against AI
      </Link>
      <br />
      <Link className="home-page-link" to="/hvh">
        Play Against A human
      </Link>
    </div>
  );
};

export default HomePage;
