import React from "react";

const Contact = () => {
  return <div>
    <section id="contact" class="contact">
      <div class="container" >

        <div class="section-title">
          <h2>Contact</h2>
        </div>

        <div class="contact-row mt-1">

          <div class="col-lg-4 mt-5 mt-lg-0">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Chennai, Tamil Nadu, India</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>jamesdurai@outlook.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 8220817619</p>
              </div>

              <div class="resume_download">
                <i class="bi bi-file-person"></i>
                <h4>Click Here to Download CV</h4>

                <a href="https://drive.google.com/file/d/1msuldyr4get-QHtl7xs0kpBVoZCojubU/view?usp=sharing" rel="noreferrer">
                  <button>Download</button>
              </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  </div>;
};

export default Contact;
