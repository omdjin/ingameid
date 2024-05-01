import Link from "next/link";
import { SITE_NAME } from "constants/index";
import {
  footerStyle,
  contentStyle,
  footerSpan,
  pagesStyle,
} from "./styles.css";

export default function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={contentStyle}>
        <span className={footerSpan}>
          Copyright &copy; {new Date().getFullYear()} {SITE_NAME}
        </span>
        <div className={pagesStyle}>
          <Link href="/tentang-kami">Tentang Kami</Link>
          <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
        </div>
      </div>
    </footer>
  );
}
