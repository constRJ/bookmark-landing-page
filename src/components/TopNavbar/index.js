import IconFacebook from "@assets/icons/icon-facebook.svg";
import IconTwitter from "@assets/icons/icon-twitter.svg";
import Logo from "@assets/logo/logo-bookmark.svg";
import { motion } from "framer-motion";
import React, { useState } from "react";

const TopNavbar = () => {
  const [navbarCollapse, setNavbarCollapse] = useState(false)

  const animateMenuVariants = {
    open: { right: 0 },
    closed: { right: "100%" }
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-xxl">
          <div className="col-3 ps-3 ps-sm-5 ps-md-0 mt-3 mt-sm-5">
            <a className="navbar-brand" href="/"><img src={Logo} alt="bookmark-landing-logo" /></a>
          </div>
          <div className="col-0 col-md-9 d-md-block mt-3 mt-sm-5 navbar-nav-menu-container">
            <div className="collapse d-flex justify-content-sm-end" id="landing-sidebar-menu">
              <motion.ul className="navbar-nav navbar-nav-menu" animate={navbarCollapse ? "open" : "closed"} variants={animateMenuVariants}>
                <li className="nav-item px-4 me-md-4 me-lg-3">
                  <a href="/" className="nav-link text-center">Features</a>
                </li>
                <li className="nav-item px-4 me-md-2 me-lg-3">
                  <a href="/" className="nav-link text-center">Pricing</a>
                </li>
                <li className="nav-item px-4 me-md-2 me-lg-3">
                  <a href="/" className="nav-link text-center">Contact</a>
                </li>
                <li className="nav-item px-0 px-md-4 me-md-2 me-lg-3">
                  <button className="text-center px-5 py-2">Login</button>
                </li>
                <li className="nav-item d-md-none">
                  <div className="nav-item-social">
                    <a href="/"><img src={IconFacebook} alt="social-facebook" /></a>
                    <a href="/"><img src={IconTwitter} alt="social-twitter" /></a>
                  </div>
                </li>
              </motion.ul>
            </div>
          </div>
          <div className="col-9 col-md-0 pe-3 pe-sm-5 pe-md-0 mt-3 mt-sm-5 d-flex justify-content-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#landing-sidebar-menu"
              onClick={() => setNavbarCollapse(!navbarCollapse)}>
              {!navbarCollapse ?
                <span className="navbar-toggler-icon"></span>
                :
                <span className="custom-navbar-toggler-icon custom-navbar-toggler-icon-active"></span>
              }
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default TopNavbar