import Footer from "components/footer";
import Header from "components/header";

import { mainClass } from "./styles.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  );
}
