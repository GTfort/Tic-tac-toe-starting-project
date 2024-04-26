import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HumanVsHuman from "./components/HVH";
import VersusAi from "./components/VersusAi";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hvh" element={<HumanVsHuman />} />
        <Route path="/vAi" element={<VersusAi />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
