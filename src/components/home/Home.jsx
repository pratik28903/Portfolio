import "./home.css";
import React from "react";
import Data from "./Data";
import Social from "./Social";

const Home = () => {
  return (
    <section
      className="home section"
      id="home"
      style={{ marginLeft: "12.2%", marginRight: "10%" }}
    >
      <div className="home_container grid">
        <div className="home_content grid">
          <Social />

          <div className="home_img"></div>

          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
