import React from "react";
import "./projects.css";
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import Project3 from "../../assets/Project3.png";
import Project4 from "../../assets/Project4.png";
import Project5 from "../../assets/Project5.png";
import Project6 from "../../assets/Project6.png";
import Project7 from "../../assets/Project7.png";
import Project8 from "../../assets/Project8.png";

const Project = () => {
  return (
    <section className="work section" id="project">
      <h2 className="section_title">Projects</h2>

      <div className="work_container bd-grid">

      {/* <div className="work_img">
          <h5>Business Dashboard.</h5>
            <img src={Project8} alt=""   style={{ width: '350px', height: '160px' }}
            />
        </div> */}

        <div className="work_img">
          <h5>Portfolio Website.</h5>
          <a href="https://github.com/pratik28903/mywebsite" rel="noopener">
            <img src={Project7} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Landing Page.</h5>
          <a href="https://github.com/pratik28903/Landing-Page" rel="noopener">
            <img src={Project1} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Text Analyzer.</h5>
          <a href="https://github.com/pratik28903/Text-Analyzer" rel="noopener">
            <img src={Project2} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Snake Game.</h5>
          <a href="https://github.com/pratik28903/Snake-Game." rel="noopener">
            <img src={Project3} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Music Player.</h5>
          <a href="https://github.com/pratik28903/Music-Player" rel="noopener">
            <img src={Project4} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Digital Clock.</h5>
          <a href="https://github.com/pratik28903/Digital-Clock" rel="noopener">
            <img src={Project5} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Calculater.</h5>
          <a href="https://github.com/pratik28903/Calculater" rel="noopener">
            <img src={Project6} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
