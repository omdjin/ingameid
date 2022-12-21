import Link from "next/link";

import {
  headerClass,
  headerWrapper,
  headerLogo,
  headerLogoContainer,
  headerBrandLogo,
  headerSepatator,
  headerBrandLabel
} from "./styles.css";

export default function Header({ children }) {
  return (
    <header className={headerClass}>
      <div className={headerWrapper}>
        <div className={headerLogoContainer}>
          <Link href="/">
            <div className={headerLogo}>
              <span className={headerBrandLogo} aria-label="Ingame.id" />
              <div className={headerSepatator} />
              <span className={headerBrandLabel} aria-label="Ingame.id">
                INGAME : Voucher &amp; Topup Game
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
