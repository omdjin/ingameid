import type { ReactNode } from "react";
import Header from "~/components/header";
import Footer from "~/components/footer";

import { mainClass } from "./layout.css";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div id="_root">
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
    </div>
  );
}
