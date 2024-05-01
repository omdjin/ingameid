import { SITE_NAME } from "constants/index";
import Link from "next/link";

import {
  headerClass,
  headerWrapper,
  headerLogo,
  headerLogoContainer,
  headerBrandLogo,
  headerSepatator,
  headerBrandLabel,
  styNavDefault,
} from "./styles.css";

export default function Header({ children }) {
  return (
    <header className={headerClass}>
      <div className={headerWrapper}>
        <div className={headerLogoContainer}>
          <Link href="/">
            <div className={headerLogo}>
              <span className={headerBrandLogo} />
              <div className={headerSepatator} />
              <span className={headerBrandLabel}>{SITE_NAME}</span>
            </div>
          </Link>
        </div>
        <nav className={styNavDefault}>
          <Link href="/tag/mobile-legends">Mobile Legends</Link>
          <Link href="/tag/tips-gaming">Tips Gaming</Link>
          <Link href="/tag/pro-player">Pro Player</Link>
        </nav>
      </div>
    </header>
  );
}
