import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Pratik</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer_link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.facebook.com/pratik.ostwal.7771"
            className="footer_social-link"
            rel="noopener"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/pratikostwal.25/"
            className="footer_social-link"
            rel="noopener"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com"
            className="footer_social-link"
            rel="noopener"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Crypticalcoder. all rigth reserved | This template is made by
          Pratik Ostwal
        </span>
      </div>
    </footer>
  );
};

export default Footer;
