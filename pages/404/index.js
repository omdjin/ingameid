import Link from "next/link";

import { mainContent } from "styles/404.css";

export default function Error404() {
  return (
    <article className={mainContent}>
      <h2>Maaf, halaman ini tidak tersedia.</h2>
      <p>
        Tautan yang anda ikuti mungkin salah, atau halaman ini sudah dihapus.
        Silakan <Link href="/">Kembali Ke Beranda</Link>
      </p>
    </article>
  );
}
