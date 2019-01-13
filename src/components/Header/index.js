import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";
import "./styles.css";

const Header = () => (
  <header>
    <div className="header_wrapper">
      <div className="header_logo-container">
        <Link to="/">
          <div className="header_logo">
            <span className="header_brand-logo" ariaLabel="Ingame.id" />
            <div className="header_sparator" />
            <span className="header_brand-label" ariaLabel="Ingame.id">
              Ingame.id
            </span>
          </div>
        </Link>
      </div>
    </div>
  </header>
);

// Header.propTypes = {

// }

export default Header;
