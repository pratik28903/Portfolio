import "./qualification.css";
import React, { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">BCA</h3>
                <span className="qualification_subtitle">
                  Pune Univercity, Vishwakarma College of Arts Commerce and
                  Science
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2018-2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">HSC</h3>
                <span className="qualification_subtitle">
                  Vishwakarma College of Arts Commerce and Science
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2016-2018
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">SSC</h3>
                <span className="qualification_subtitle">
                  Sahyadri National School
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2015
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Software Engineer</h3>
                <span className="qualification_subtitle">
                  Aligned Automation
                </span>
                <span className="qualification_subtitle1">
                  Developed a dashboard for clients to track sales and purchases
                  across different regions through various charts, graphs, and
                  maps. Managed JIRA tracking, maintained documentation, and
                  collaborated with team members to share knowledge and explore
                  new technologies.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Intern</h3>
                <span className="qualification_subtitle">
                  Aligned Automation
                </span>
                <span className="qualification_subtitle1">
                  Gained hands-on experience in frontend and backend
                  development, databases, AWS, and Azure. Learned and applied
                  JavaScript, React.js, Node.js, Express.js, and MongoDB.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Wordpress Developer</h3>
                <span className="qualification_subtitle">
                  Sands Techsolutions
                </span>
                <span className="qualification_subtitle1">
                Developed new web technologies and improved website functionality.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
