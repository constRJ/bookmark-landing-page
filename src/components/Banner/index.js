import IllustrationImage from "@assets/image/illustration-hero.svg";
import React from "react";

const Banner = () => {
  return (
    <React.Fragment>
      <section className="banner-section-container">
        <div className="container-xxl">
          <div className="col-12 d-lg-flex">
            <div className="col-12 col-lg-6 order-lg-last banner-col-1 d-flex justify-content-center">
              <img src={IllustrationImage} alt="bookmark-landing-page" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-6 order-lg-first banner-col-2">
              <div className="col-9 mx-auto mt-5 mx-lg-0 mt-lg-0">
                <h1 className="text-center text-lg-start">A Simple Bookmark Manager</h1>
                <p className="text-center text-lg-start my-4">A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
              </div>
              <div className="col-12 btn-container d-flex justify-content-center justify-content-lg-start">
                <button className="btn btn-softBlue py-3 px-3 me-3">Get it on Chrome</button>
                <button className="btn btn-light shadow-sm py-3 px-3">Get it on Firefox</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Banner