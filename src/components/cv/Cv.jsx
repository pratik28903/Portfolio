import "./cv.css";
import React, { useEffect, useState } from "react";
import resume from "../../assets/Pdf/Pratik_Ostwal.docx";
import csscertificate from "../../assets/Pdf/Css3.pdf";
import htmlcertificate from "../../assets/Pdf/Html5.pdf";
import Vuejscertificate from "../../assets/Pdf/VueJs.pdf";
import Reactjscertificate from "../../assets/Pdf/ReactJs.pdf";
import Typescriptcretifate from "../../assets/Pdf/TypeScript.pdf";
import javascriptcertificate from "../../assets/Pdf/JavaScript.pdf";

const Cv = () => {
  const [Toggle, showMenu] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  //Theme Toggle//
  const [theme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="#homes" className="nav__logo">
            Pratik Ostwal cv
          </a>
          <div
            className={Toggle ? "nav__menu show-menu" : "nav_menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#homes" className="nav__link">
                  <i className="bx bx-home nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#profile" className="nav__link">
                  <i className="bx bx-user nav__icon"></i>Profile
                </a>
              </li>
              <li className="nav__item">
                <a href="#education" className="nav__link">
                  <i className="bx bx-book nav__icon"></i>Education
                </a>
              </li>
              <li className="nav__item">
                <a href="#skilles" className="nav__link">
                  <i className="bx bx-receipt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#experience" className="nav__link">
                  <i className="bx bx-briefcase-alt nav__icon"></i>Experience
                </a>
              </li>
              <li className="nav__item">
                <a href="#certificates" className="nav__link">
                  <i className="bx bx-award nav__icon"></i>Certificates
                </a>
              </li>
              {/*<!--<li className="nav__item">
                            <a href="#references" className="nav__link">
                                <i className='bx bx-link-external nav__icon'></i>References
                            </a>
                            </li>-->*/}
            </ul>
            <br />
            <i
              className="uil-times nav_close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>
      <main className="l-main bd-container" />
      {/*             <!-- All elements within this div, is generated in PDF -->*/}
      <div className="resume" id="area-cv">
        <div className="resume__left">
          {/*                         <!--========== HOME ==========-->*/}
          <section className="homes" id="homes">
            <div className="home__container section bd-grid">
              <div className="home__data bd-grid">
                {/* <!--<img src="assets/img/perfil.jpg" alt="" className="home__img">--> */}
                <h1 lass="home__title">
                  PRATIK<b> OSTWAL</b>
                </h1>
                <h3 className="home__profession">
                  Web Developer/Web Desiginer
                </h3>
                {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
                <div>
                  <a downlode="" href={resume} className="home__button-movil">
                    Downlode
                  </a>
                </div>
              </div>
              <div className="home__address bd-grid">
                <span className="home__information">
                  <i className="bx bx-map home__icon"></i>Sr.No-58/7, Gokul
                  Nagar, Katraj, Pune(411046).
                </span>
                <span className="home__information">
                  <i className="bx bx-envelope home__icon"></i>
                  pratikostwal985@email.com
                </span>
                <span className="home__information">
                  <i className="bx bx-phone home__icon"></i>8796889625
                </span>
                <span className="home__information">
                  <a href="" className="social__link">
                    <i className="bx bxl-blogger"></i>Website
                  </a>
                </span>
              </div>
            </div>
            {/* <!-- Theme change button --> */}
            {/* <i className='bx bx-moon change-theme' title="Theme" id="theme-button" ></i> */}
            {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
            <a href={resume}>
              {" "}
              <i
                className="bx bx-download generate-pdf"
                title="Generate PDF"
                id="resume-button"
              ></i>
            </a>
          </section>
          {/* <!--========== SOCIAL ==========--> */}
          <section className="profile section" id="profile">
            <h2 className="section-title">SOCIAL</h2>
            <div className="social__container bd=grid">
              <a
                href="https://www.linkedin.com/in/pratik-ostwal-3293a81a9/"
                rel="noopener"
                className="social__link"
              >
                <i className="bx bxl-linkedin-square socila__icon"></i> @pratik
                ostwal
              </a>
              <br />
              <br />
              <a
                href="https://www.facebook.com/pratik.ostwal.7771"
                rel="noopener"
                className="social__link"
              >
                <i className="bx bxl-facebook social__icon"></i> @pratik ostwal
              </a>
              <br />
              <br />
              <a
                href="https://www.instagram.com/pratikostwal.25/"
                rel="noopener"
                className="social__link"
              >
                <i className="bx bxl-instagram social__icon"></i> @pratik ostwal
              </a>
              <br />
              <br />
            </div>
          </section>
          {/* <!--========== PROFILE ==========--> */}
          <section className="profile section" id="profile">
            <h2 className="section-title">Profile</h2>
            <p className="profile__description">
              An experienced and motivated MERN Stack Developer with 2+ years of
              experience in developing web applications that are both
              user-friendly and secure. Skilled in developing efficient and
              effective applications using MongoDB, Express, React.js, Node.js
              and APIS .Ability to work in an Agile environment.Designed and
              developed RESTful web services. Developed and maintained.
            </p>
          </section>
          {/* <!--========== EDUCATION ==========--> */}
          <section className="education section" id="education">
            <h2 className="section-title">Education</h2>
            <div className="education__container bd-grid">
              <div className="education__content">
                <div className="education__time">
                  <span className="education__rounder"></span>
                  <span className="education__line"></span>
                </div>
                <div className="education__data bd-grid">
                  <h3 className="education__title">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <span className="education__studies">
                    Vishwakarma institute of Information technology (VIIT), Pune
                    University
                  </span>
                  <span className="education__year">2018 - 2021</span>
                </div>
              </div>
              <div className="education__content">
                <div className="education__time">
                  <span className="education__rounder"></span>
                  <span className="education__line"></span>
                </div>
                <div className="education__data bd-grid">
                  <h3 className="education__title">
                    Higher Secondary School Certificate (HSC)
                  </h3>
                  <span className="education__studies">
                    Vishwakarma College of Arts Commerce and Science (VCACS)
                  </span>
                  <span className="education__year">2017 - 2018</span>
                </div>
              </div>
              <div className="education__content">
                <div className="education__time">
                  <span className="education__rounder"></span>
                  {/* <!--<span className="education__line"></span>--> */}
                </div>
                <div className="education__data bd-grid">
                  <h3 className="education__title">
                    Secondary School Certificate (SSC)
                  </h3>
                  <span className="education__studies">
                    Sahyadri national school
                  </span>
                  <span className="education__year">2016</span>
                </div>
              </div>
            </div>
          </section>
          {/* <!--========== SKILLS  ==========--> */}
          <section className="skilles section" id="skilles">
            <h2 className="section-title">skills</h2>
            <div className="skills__content bd-grid"></div>
            <ul className="skills__content bd-grid">
              <li className="skills__name">
                <span className="skills__circle"></span>HTML5
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>Css3
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>Bootstrap
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>JavaScript
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>ReactJs
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>ReactNative
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>NodeJs
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>ExpressJs
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>MongoDb
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>NodeJs
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>Firebase
              </li>
              <li className="skills__name">
                <span className="skills__circle"></span>Git/GitHub
              </li>
            </ul>
          </section>
        </div>
        <div className="resume__right">
          {/* <!--========== EXPERIENCE ==========--> */}
          <section className="experience section" id="experience">
            <h2 className="section-title">Experience</h2>

            <div className="experience__container bd-grid">
              <div className="experience__content">
                <div className="experience__time">
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>
                <div className="experience__data bd-grid">
                  <h3 className="experience__title">Software Engineer</h3>
                  <span className="experience__company">
                    From 2022 | Aligned Automation
                  </span>
                  <p className="experience__description">
                    Working in this company dedicating the best responsibility
                    is the area that corresponds, to delivering the best results
                    for the company and improving productivity.
                  </p>
                </div>
              </div>
              <div className="experience__content">
                <div className="experience__time">
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>
                <div className="experience__data bd-grid">
                  <h3 className="experience__title">Intern</h3>
                  <span className="experience__company">
                    From 2021 to 2022 | Aligned Automation
                  </span>
                  <p className="experience__description">
                    Working in this company dedicating the best responsibility
                    is the area that corresponds, to delivering the best results
                    for the company and improving productivity.
                  </p>
                </div>
              </div>
              <div className="experience__content">
                <div className="experience__time">
                  <span className="experience__rounder"></span>
                  {/* <span className="experience__line"></span> */}
                </div>
                <div className="experience__data bd-grid">
                  <h3 className="experience__title">Wordpress Developer</h3>
                  <span className="experience__company">
                    From 2021 to 2021 | Sands Techsolution
                  </span>
                  <p className="experience__description">
                    Working in this company dedicating the best responsibility
                    is the area that corresponds, to delivering the best results
                    for the company and improving productivity.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!--========== CERTIFICATES ==========--> */}
          <section className="certificate section" id="certificates">
            <h2 className="section-title">Certificates</h2>
            <div className="certificate__container bd-grid">
              <div className="certificate__content">
                <h3 className="certificate__title">ReactJs (2022)</h3>
                <p className="certificate__description">
                  In this complete certification course ,I have learn all the
                  html5 tages attrebute and many more things.
                </p>
                <a href={Reactjscertificate} rel="noopener">
                  See my certificate.
                </a>
                {/* <a downlode="" href={Reactjscertificate} className="home__button-movil">Downlode the certificate</a> */}
              </div>
              <div className="certificate__content">
                <h3 className="certificate__title">VueJs (2022)</h3>
                <p className="certificate__description">
                  In this complete certification course ,I have learn all the
                  Css3 tages attrebute animation and many more new things to
                  design the website.
                </p>
                <a href={Vuejscertificate} rel="noopener">
                  See my certificate.
                </a>
                {/* <a download="" href={Vuejscertificate} className="home__button-movil">Downlode the certificate</a> */}
              </div>
              <div className="certificate__content">
                <h3 className="certificate__title">TypeScript (2021)</h3>
                <p className="certificate__description">
                  In this complete certification course ,I have learn JavaScript
                  wich new things.
                </p>
                <a href={Typescriptcretifate} rel="noopener">
                  See my certificate.
                </a>
                {/* <a download="" href={Typescriptcretifate} className="home__button-movil">Downlode the certificate</a> */}
              </div>
              <div className="certificate__content">
                <h3 className="certificate__title">JavaScript (2021)</h3>
                <p className="certificate__description">
                  In this complete certification course ,I have learn JavaScript
                  wich new things.
                </p>
                <a href={javascriptcertificate} rel="noopener">
                  See my certificate.
                </a>
                {/* <a download="" href={javascriptcertificate} className="home__button-movil">Downlode the certificate</a> */}
              </div>
              <div className="certificate__content">
                <h3 className="certificate__title">Css3 (2020)</h3>
                <p className="certificate__description">
                  In this complete certification course ,I have learn JavaScript
                  wich new things.
                </p>
                <a href={csscertificate} rel="noopener">
                  See my certificate.
                </a>
                {/* <a download="" href={csscertificate} className="home__button-movil">Downlode the certificate</a> */}
              </div>
              <div className="certificate__content">
                <h3 className="certificate__title">Html5 (2020)</h3>
                <p className="certificate__description">
                  In this complete certification course ,I have learn JavaScript
                  wich new things.
                </p>
                <a href={htmlcertificate} rel="noopener">
                  See my certificate.
                </a>
                {/* <a download="" href={htmlcertificate} className="home__button-movil">Downlode the certificate</a> */}
              </div>
            </div>
          </section>
          {/* <!--========== REFERENCES ==========--> */}
          {/* <!--<section className="references section" id="references">
                                                    <h2 className="section-title">Refreences</h2>
                                                    <div className="references__container bd-grid">
                                                        <div className="references__content bd-grid">
                                                            <span className="references__subtitle">Sr. Director</span>
                                                            <h3 className="references__title">Mr. Clay Doe</h3>
                                                            <ul className="references__contact">
                                                                <li>Phone: 999-777-666</li>
                                                                <li>Email: user@email.com</li>
                                                            </ul>
                                                        </div>
                                                        <div className="references__content bd-grid">
                                                            <span className="references__subtitle">Mag. Developer</span>
                                                            <h3 className="references__title">Mr. Robbinson Bass</h3>
                                                            <ul className="references__contact">
                                                                <li>Phone: 999-777-666</li>
                                                                <li>Email: user@email.com</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </section>-->
                                                <!--========== LANGUAGES ==========--> */}
          <section className="languages section">
            <h2 className="section-title">Languages</h2>
            <div className="languages__container">
              <ul className="languages__content bd-grid">
                <li className="languages__name">
                  <span className="languages__circle"></span>English
                </li>
                <li className="languages__name">
                  <span className="languages__circle"></span>Hindi
                </li>
                <li className="languages__name">
                  <span className="languages__circle"></span>Marathi
                </li>
                <li className="languages__name">
                  <span className="languages__circle"></span>Marwadi
                </li>
              </ul>
            </div>
          </section>
          {/* <!--========== INTERESTS ==========--> */}
          <section className="interests section">
            <h2 className="section-title">Interests</h2>
            <div className="interests__container bd-grid">
              <div className="interests__content">
                <i className="bx bx-headphone interests__icon"></i>
                <span className="interests__name">Music</span>
              </div>
              <div className="interests__content">
                <i className="bx bxs-plane-alt interests__icon"></i>
                <span className="interests__name">Travel</span>
              </div>
              <div className="interests__content">
                <i className="bx bx-box interests__icon"></i>
                <span className="interests__name">Read</span>
              </div>
              <div className="interests__content">
                <i className="bx bx-dumbbell interests__icon"></i>
                <span className="interests__name">Fitness</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <!--========== SCROLL TOP ==========--> */}
      {/* <a href="" className="scrolltop" id="scroll-top">
            <i className='bx bx-up-arrow-alt scrolltop__icon'></i>
        </a> */}
    </div>
  );
};

export default Cv;
