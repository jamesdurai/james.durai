import React from "react";
import jamesImage from "../images/james.jpg";
import { MdEngineering } from "react-icons/md";
import { GiMechanicalArm } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
            <p>
              After successfully completing my degree in Mechanical Engineering
              at Francis Xavier Engineering College, Tirunelveli, I emerge as a
              dynamic individual, equipped with a blend of technical prowess and
              interpersonal finesse. Driven by an unwavering dedication, innate
              self-confidence, and an insatiable thirst for knowledge, I stand
              poised to embark on a journey within the realm of software
              development. My journey thus far has honed not only my technical
              acumen but also my ability to communicate effectively and organize
              tasks efficiently. Now, I eagerly seek a stimulating role in a
              prestigious organization where I can contribute my skills and
              expertise, while continuing to grow and evolve in the
              ever-evolving landscape of software engineering.
            </p>
          </div>

          <div class="row">
            <div class="image-about col-lg-4">
              <img src={jamesImage} class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Frontend Web Developer.</h3>
              <p class="fst-italic">
                I have Worked as a Frontend Web Developer at UTS Pvt Ltd
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong>
                      <span>
                        <FaBirthdayCake /> 3 August 1997
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong>{" "}
                      <span>
                        <FaMobileAlt /> +91 8220817619
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                      <span>
                        <FaCity /> Tirunelveli, Tamilnadu, India
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <MdDeveloperMode />{" "}
                      <span> Front End Developer in React JS</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                      <span>26</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong>{" "}
                      <span>
                        {" "}
                        <MdEngineering /> BE - MECH <GiMechanicalArm />
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>
                        <MdEmail /> jamesdurai@outlook.com
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong>
                      <SiFreelancer /> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I have completed Mechanical Engineering at Francis Xavier
                Engineering College, Tirunelveli. I am an highly dedicated,
                self-confident, and hardworking graduate with well-developed
                communication and organizational skills. I am seeking a position
                in an esteemed organization offering an opportunity for growth
                in the software field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
