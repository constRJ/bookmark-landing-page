import Logo from "@assets/logo/logo-bookmark.svg";
import React, { useState } from "react";

const TopNavbar = () => {
  const [navbarCollapse, setNavbarCollapse] = useState(false)
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-light mt-3 mt-sm-5">
        <div className="container-xxl">
          <div className="col-3 ps-3 ps-sm-5 ps-md-0">
            <a className="navbar-brand" href="/"><img src={Logo} alt="bookmark-landing-logo" /></a>
          </div>
          <div className="col-9 d-none d-md-block">
            <div className="collapse d-flex justify-content-sm-end" id="landing-sidebar-menu">
              <ul className="navbar-nav navbar-nav-menu-container">
                <li className="nav-item me-0 me-sm-2 px-4 me-md-4 me-lg-3">
                  <a href="/" className="nav-link text-center">Features</a>
                </li>
                <li className="nav-item me-0 me-sm-2 px-4 me-0 me-md-2 me-lg-3">
                  <a href="/" className="nav-link text-center">Pricing</a>
                </li>
                <li className="nav-item me-0 me-sm-2 px-4 me-0 me-md-2 me-lg-3">
                  <a href="/" className="nav-link text-center">Contact</a>
                </li>
                <li className="nav-item me-0 me-sm-2 me-0 me-md-2 me-lg-3">
                  <button className="text-center px-5 py-2">Login</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9 col-md-0 pe-3 pe-sm-5 pe-md-0 d-flex justify-content-end">
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