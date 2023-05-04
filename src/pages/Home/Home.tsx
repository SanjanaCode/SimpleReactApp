import React from "react";
import logo from "../../logo.svg";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="placeholder">
        <h1>Home</h1>
      </div>
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
