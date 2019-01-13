// import React from "react";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { headerClass, headerWrapper } from "./styles";

const Header = () => (
  <header css={headerClass}>
    <div css={headerWrapper}>
      <div className="header_logo-container">
        <Link to="/">
          <div className="header_logo">
            <span className="header_brand-logo" aria-label="Ingame.id" />
            <div className="header_sparator" />
            <span className="header_brand-label" aria-label="Ingame.id">
              Ingame.id
            </span>
          </div>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
