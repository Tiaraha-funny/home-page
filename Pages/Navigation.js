import React from "react";

function Navigation() {
  return (
      <nav className="navigation">
        <ul className="list__menu_dropdown">
          <li className="contents_menu">
            <a className="home__page" href="/home">
              Home
            </a>
          </li>
          <li className="contents_menu">
            <a className="about" href="/discover">
              About
            </a>
          </li>
          <li className="contents_menu">
            <a className="portfolio" href="/photo">
              Portfolio
            </a>
          </li>
          <li className="contents_menu">
            <a className="contact" href="/contact">
              Contact
            </a>
          </li>
          <li className="contents_menu">
            <a className="blog" href="/profile">
              Blog
            </a>
          </li>
        </ul>
      </nav>
  );
}

export default Navigation;
