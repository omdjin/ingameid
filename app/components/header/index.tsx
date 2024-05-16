import { SITE_NAME } from "~/constants";
import { Link } from "@remix-run/react";

import {
  headerClass,
  headerWrapper,
  headerLogo,
  headerLogoContainer,
  headerBrandLogo,
  headerSepatator,
  headerBrandLabel,
  styNavDefault,
  styNavLink,
} from "./header.css";

export default function Header() {
  return (
    <header className={headerClass}>
      <div className={headerWrapper}>
        <div className={headerLogoContainer}>
          <Link to="/" style={{ width: 330 }}>
            <div className={headerLogo}>
              <span className={headerBrandLogo} />
              <div className={headerSepatator} />
              <span className={headerBrandLabel}>{SITE_NAME}</span>
            </div>
          </Link>
        </div>
        <nav className={styNavDefault}>
          <Link className={styNavLink} to="/tag/mobile-legends">
            Mobile Legends
          </Link>
          <Link className={styNavLink} to="/tag/tips-gaming">
            Tips Gaming
          </Link>
          <Link className={styNavLink} to="/tag/pro-player">
            Pro Player
          </Link>
        </nav>
      </div>
    </header>
  );
}
