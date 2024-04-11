import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const handleClick = (e) => {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    e.target.classList.toggle("bi-list");
    e.target.classList.toggle("bi-x");
  };

  return (
    <div>
      <i
        onClick={handleClick}
        class="bi bi-list mobile-nav-toggle d-lg-none"
      ></i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <Link to="/" class="nav-link scrollto active">
                <i class="bi bi-house-door"></i> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" class="nav-link scrollto">
                <i class="bi bi-file-person"></i> <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/skills" class="nav-link scrollto">
                <i class="bi bi-hdd-rack"></i> <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/resume" class="nav-link scrollto">
                <i class="bi bi-file-earmark"></i> <span>Resume</span>
              </Link>
            </li>
            
            <li>
              <Link to="/contact" class="nav-link scrollto">
                <i class="bi bi-envelope"></i> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
