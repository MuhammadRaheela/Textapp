import React from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.Home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.About}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.togglemode}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
          </div>
        </div>
      </div>
    </nav>

  )
}

// Navbar.defaultProps = {
//   title: 'Set ok',
//   About: 'cgcydhuc',
// };

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   About: PropTypes.string.isRequired,
// };


