import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    {/* <img src="img/about/about-me.jpg" alt="about" /> */}
                    <img
  src={process.env.PUBLIC_URL + "/img/about/about-me.jpg"}
  alt="about"
/>

                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Software engineer</p>
                  <h3>Sara Ouldjelloul</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>About me</h3>
                </div>

                <div className="about-text">
                  <p>
                  I’m a software engineer with a deep passion for technology, 
                  building projects both independently and with talented teams.
                  I’ve worked on a variety of web and mobile applications,
                  from freelance projects created from scratch to larger team collaborations.
                 
                  </p>
                  <p>
                  Whether leading a project or contributing as part of a team, 
                  I’m always ready to take on new challenges and deliver innovative, high-quality solutions.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Sara Ouldjelloul</span>
                        </li>
                       
                        <li>
                          <label>Address: </label>
                          <span>Casablanaca Morroco</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+212) 637 243 052</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>ouldjelloulsara@gmail.com</span>
                        </li>
                       
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards.</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div> */}

          {/* s<Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
