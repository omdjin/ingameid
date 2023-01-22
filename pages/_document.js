import { Html, Head, Main, NextScript } from "next/document";

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
      </body>
    </Html>
  );
}
