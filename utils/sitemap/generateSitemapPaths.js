import { HOSTNAME } from "constants/index";

export default function generateSitemapPaths(array) {
  const items = array.map((item) => {
    const { url, post_modified_date } = item;
    const sanitizedUrl = url.endsWith("/") ? url.slice(0, -1) : url;

    return `<url>
        <loc>${HOSTNAME}${sanitizedUrl}</loc>
        ${
          post_modified_date
            ? `<lastmod>${
                new Date(post_modified_date).toISOString().split("T")[0]
              }</lastmod>`
            : ""
        }
    </url>`;
  });

  return items.join("");
}
