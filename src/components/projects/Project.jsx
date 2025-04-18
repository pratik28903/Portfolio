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
import ManageTicket from "../../assets/ManageTicket.png";
import Manageuser from "../../assets/Manageuser.png";
import Dashboard from "../../assets/Dashboard.png";

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
          <a
            href="https://github.com/pratik28903/mywebsite"
            rel="noopener"
            target="_blank"
          >
            <img src={Project7} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Landing Page.</h5>
          <a
            href="https://pratik28903.github.io/Landing-Page/#"
            rel="noopener"
            target="_blank"
          >
            <img src={Project1} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Text Analyzer.</h5>
          <a
            href="https://pratik28903.github.io/Text-Analyzer/"
            rel="noopener"
            target="_blank"
          >
            <img src={Project2} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Snake Game.</h5>
          <a
            href="https://pratik28903.github.io/Snake-Game./"
            rel="noopener"
            target="_blank"
          >
            <img src={Project3} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Music Player.</h5>
          <a
            href="https://pratik28903.github.io/Music-Player/"
            rel="noopener"
            target="_blank"
          >
            <img src={Project4} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Digital Clock.</h5>
          <a
            href="https://pratik28903.github.io/Digital-Clock/"
            rel="noopener"
            target="_blank"
          >
            <img src={Project5} alt="" />
          </a>
        </div>
        <div className="work_img">
          <h5>Calculater.</h5>
          <a
            href="https://pratik28903.github.io/Calculater/"
            rel="noopener"
            target="_blank"
          >
            <img src={Project6} alt="" />
          </a>
        </div>

        <div className="work_img">
  <h5>Ticketing System - Freelance Project</h5>
  <p style={{ fontSize: "10px", color: "#555", margin: "3px 0" }}>
    Multi-role ticket management system built for Jupiter Teleinfra Services.
  </p>

<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
    <a href={Dashboard} target="_blank" rel="noopener noreferrer">
    <img src={Dashboard} alt="Dashboard" style={{ width: '100px', borderRadius: '8px' }} />
  </a>
    <a href={Manageuser} target="_blank" rel="noopener noreferrer">
    <img src={Manageuser} alt="Manage User" style={{ width: '100px', borderRadius: '8px' }} />
  </a>
  <a href={ManageTicket} target="_blank" rel="noopener noreferrer">
    <img src={ManageTicket} alt="Manage Ticket" style={{ width: '100px', borderRadius: '8px' }} />
  </a>
</div>

{/*   <a
    href="https://github.com/pratik28903/ticketing-system" // change to live link if hosted
    rel="noopener"
    target="_blank"
    style={{ display: "inline-block", marginTop: "10px", color: "#007bff", fontWeight: "bold" }}
  >
    View Code on GitHub
  </a> */}
</div>

        
      </div>
    </section>
  );
};

export default Project;
