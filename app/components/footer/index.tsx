import { Link } from "@remix-run/react";
import { SITE_NAME } from "~/constants";
import {
  footerStyle,
  contentStyle,
  footerSpan,
  pagesStyle,
  anchorStyle,
} from "./footer.css";

export default function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={contentStyle}>
        <span className={footerSpan}>
          Copyright &copy; {new Date().getFullYear()} {SITE_NAME}
        </span>
        <div className={pagesStyle}>
          <Link className={anchorStyle} to="/tentang-kami">
            Tentang Kami
          </Link>
          <Link className={anchorStyle} to="/kebijakan-privasi">
            Kebijakan Privasi
          </Link>
        </div>
      </div>
    </footer>
  );
}
