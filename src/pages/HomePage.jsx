import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import HumanVsHuman from "../components/HVH";

const HomePage = () => {
  useEffect(() => {
    // Add the 'no-scroll' class to the body element when the component mounts
    document.body.classList.add("no-scroll");

    // Remove the 'no-scroll' class from the body element when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
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
