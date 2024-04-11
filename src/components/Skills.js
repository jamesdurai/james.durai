import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Skills = () => {
  return (
    <div>
      <section id="skills" class="skills section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Skills</h2>
            <p>
              I have a strong command of HTML5, CSS3, and JavaScript for
              developing interactive and dynamic web pages. Proficient in CSS
              frameworks like Bootstrap and Foundation, allowing me to create
              responsive and visually appealing designs. Experienced in working
              with JavaScript frameworks and libraries such as React.js to build
              scalable and efficient web applications.
            </p>
          </div>

          <div class="row skills-content">
            <div class="col-lg-6">
              <div class="progress">
                <span class="skill">
                  <FaHtml5 />
                  --HTML
                  <i class="val">100%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  <FaCss3Alt />
                  --CSS <i class="val">90%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  <TbBrandJavascript />
                  --JavaScript <i class="val">85%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  <GiMaterialsScience />
                  --Material UI <i class="val">80%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                <FaNodeJs />
                  --Node Js<i class="val">75%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="progress">
                <span class="skill">
                  <FaReact />
                  --React JS <i class="val">80%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  <FaGithub />
                  --Git Hub <i class="val">90%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  <FaBootstrap />
                  --Bootstrap <i class="val">100%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  <TbBrandRedux />
                  --Redux Tool-Kit <i class="val">70%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div class="progress">
                <span class="skill">
                  <IoLogoVercel />
                  --Versel <i class="val">90%</i>
                </span>
                <div class="progress-bar-wrap">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
