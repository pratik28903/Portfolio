import React, { useState, useEffect } from 'react';
import "./header.css";

function Header() {

  /*=============== Change Background Header ===============*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">Pratik</a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}>
                <i className={`nav_icon bx bx-home ${Toggle ? "" : "hidden"}`}></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}>
                <i className={`nav_icon bx bx-user ${Toggle ? "" : "hidden"}`}></i> About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}>
                <i className={`nav_icon bx bx-file ${Toggle ? "" : "hidden"}`}></i> Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === "#qualification" ? "nav_link active-link" : "nav_link"}>
                <i className={`nav_icon bx bx-briefcase ${Toggle ? "" : "hidden"}`}></i> Qualification
              </a>
            </li>

            <li className="nav_item">
              <a href="#project" onClick={() => setActiveNav('#project')} className={activeNav === "#project" ? "nav_link active-link" : "nav_link"}>
                <i className={`nav_icon bx bx-image ${Toggle ? "" : "hidden"}`}></i> Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}>
                <i className={`nav_icon bx bx-phone ${Toggle ? "" : "hidden"}`}></i> Contact
              </a>
            </li>
          </ul>
          {Toggle && (
            <i className="bx bx-x nav_close" onClick={() => showMenu(!Toggle)}></i>
          )}

          {/* <i className="bx bx-x nav_close" onClick={() => showMenu(!Toggle)}></i> */}

        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header;
