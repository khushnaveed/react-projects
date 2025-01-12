import React from "react";

export default function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Weekly Todo's
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Monday
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Tuesday
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Wednesday
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="/">
                Thursday
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="/">
                Friday
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="/">
                Saturday
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sunday
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-primary">
            Reset All
          </button>
        </div>
      </div>
    </nav>
    
    
  );
}
