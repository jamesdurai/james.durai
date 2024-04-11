import React from "react";
// import { FaAngleDoubleRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Hero = () => {
  // const handleButtonClick = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1Bys8k_asXf8kcgO5Z_lkPIMoe39hyXuk/view?usp=sharing",
  //     "_blank",
  //     "noopener noreferrer"
  //   );
  // };
  return (
    <section id="hero" className="d-flex flex column justify-content-center">
      <div className="container">
        <h1>James Durai</h1>
        <div className="slide-right">
          <p>
            I'm <span>Frontend React JS web Developer</span>
          </p>
        </div>
        {/* <div>
          <Link onClick={handleButtonClick}>
            View CV <FaAngleDoubleRight />
          </Link>
        </div> */}

        {/* <div class="social-links">
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
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
