import { footerStyle, contentStyle, footerSpan } from "./styles.css";

export default function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={contentStyle}>
        <span className={footerSpan}>
          Copyright &copy; {new Date().getFullYear()} Ingame.id
        </span>
      </div>
    </footer>
  );
}
