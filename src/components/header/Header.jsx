import React, { useState } from "react";
import "./header.css";

function Header() {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNev] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Pratik
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNev("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-estate bx bx-home-alt"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNev("#about")}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-user bx bx-user"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNev("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-file-alt bx bx-file"></i> Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#qualification"
                onClick={() => setActiveNev("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-briefcase-alt bx bx-briefcase"></i>{" "}
                Qualification
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#project"
                onClick={() => setActiveNev("#project")}
                className={
                  activeNav === "#project" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-scenery bx bx-image"></i> Projects
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNev("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-message bx bx-phone"></i> Contact
              </a>
            </li>
          </ul>
          <div
            style={{
              marginLeft: "97%",
              marginBottom: "-3.4rem",
              fontSize: "1.5rem",
            }}
          >
            <i
              className="uil-times bx bx-x"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
}
export default Header;
