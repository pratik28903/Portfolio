import "./skills.css";
import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Database from "./Database";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <h6 className="section_subtitle">My Technical Skills</h6>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
        <Database />
      </div>
    </section>
  );
};

export default Skills;
