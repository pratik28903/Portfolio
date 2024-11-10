import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="#"
        className="home_social-icon"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://github.com/pratik28903", "_blank");
        }}
        rel="noopener"
      >
        <i class="bx bxl-github"></i>
      </a>
      <a
        href="#"
        className="home_social-icon"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://www.linkedin.com/in/pratik-ostwal-3293a81a9/",
            "_blank"
          );
        }}
        rel="noopener"
      >
        <i class="bx bxl-linkedin-square"></i>
      </a>
      <a
        href="#"
        className="home_social-icon"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.instagram.com/pratikostwal.25/", "_blank");
        }}
        rel="noopener"
      >
        <i class="bx bxl-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
