import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="id" translate="no">
      <Head>
        <link rel="preconnect" href="https://ingame.farizal.id" crossorigin />
        <link rel="dns-prefetch" href="https://ingame.farizal.id" crossorigin />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
