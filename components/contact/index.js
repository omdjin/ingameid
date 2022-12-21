import useSWR from "swr";

import { contactWrapper } from "./styles.css";

export default function Contact({ productName }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/custom-options`,
    fetcher
  );

  if (isLoading || error) {
    return null;
  }

  const text = `Saya mau pesan ${productName}`;
  const whatsAppLink = `https://wa.me/${data.contact_wa}${
    productName ? `?text=${encodeURIComponent(text)}` : ""
  }`;

  return (
    <div className={contactWrapper}>
      <p>
        <span role="img" aria-label="contact">
          📲 WA :{" "}
          <a href={whatsAppLink} rel="noopener noreferrer" target="_blank">
            {data.contact}
          </a>
        </span>
      </p>
      <p>
        <span role="img" aria-label="contact">
          📸 Instagram :{" "}
          <a
            href="https://www.instagram.com/id.ingame/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @id.ingame
          </a>
        </span>
      </p>
    </div>
  );
}
