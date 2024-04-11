import React from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div class="container">
          <h3>James Durai</h3>
          <p>
            {" "}
            Effective communication and collaboration skills are crucial for
            working in teams and coordinating with designers, backend
            developers, and other stakeholders.
          </p>
          <div class="social-links">
            <Link to="/">
              <MdHomeFilled />
            </Link>
            <a href="https://www.facebook.com/james.cena.3954" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/i___am__jd/" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://github.com/jamesdurai" class="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/james-durai-0a57301b6/"
              class="linkedin"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>James Durai</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://github.com/jamesdurai">James Durai</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
