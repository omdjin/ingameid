import Script from "next/script";
import Footer from "components/footer";
import Header from "components/header";
import { GA_MEASUREMENT_ID } from "constants/index";

import { mainClass } from "./styles.css";

export default function Layout({ children }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_MEASUREMENT_ID}');
      `}
      </Script>
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  );
}
