import React from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import { Link } from "react-router-dom";

import "./Navbar.scss";

export interface NavbarProps {}

export interface NavbarState {
  isActive: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  state = {
    isActive: false,
  };
  toggleActive = () => this.setState({ isActive: !this.state.isActive });
  render() {
    return (
      <nav className="Navbar">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1 className="title" id="brand">
                mnr
              </h1>
            </Link>

            <div
              role="button"
              className={`navbar-burger ${this.state.isActive ? "is-active" : ""}`}
              onClick={this.toggleActive}
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div
            className={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}
            aria-hidden={this.state.isActive}
          >
            <div className="navbar-end">
              <div className="AuthButtonsWrapper">
                <AuthButtons />
              </div>
            </div>
          </div>
        </nav>
      </nav>
    );
  }
}

export default Navbar;
