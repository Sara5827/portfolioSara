import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Mobile Application",
    descriptions: `Development of high-performance mobile apps for iOS and Android.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Creation of customized and optimized websites.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-cloud",
    title: "Hosting",
    descriptions: `Reliable and secure hosting solutions for your web projects.`,
    delayAnimation: "400",
  }
  
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
