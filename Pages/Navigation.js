import React from "react";

function Navigation() {
  return (
      <nav className="navigation">
        <ul className="list__menu_dropdown">
          <li className="contents_menu">
            <a className="home__page" href="https://my-home-page-petah.netlify.app/">
              Home
            </a>
          </li>
          <li className="contents_menu">
            <a className="about" href="/discover">
              About
            </a>
          </li>
          <li className="contents_menu">
            <a className="portfolio" href="https://student-portfolio-petah.netlify.app">
              Portfolio
            </a>
          </li>
          <li className="contents_menu">
            <a className="contact" href="/contact">
              Contact
            </a>
          </li>
          <li className="contents_menu">
            <a className="blog" href="https://real-blog-about-vavatenina.netlify.app">
              Blog
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;
