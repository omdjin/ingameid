import { HOSTNAME } from "constants/index";

export default function getSitemapPages(item) {
  const sitemapPerPage = 1000;
  const items = [];

  for (let i = 1; i <= Math.ceil(item.total / sitemapPerPage); i++) {
    let url = `${HOSTNAME}/sitemap/${item.name}_sitemap${i}.xml`;
    items.push(
      `<sitemap>
           <loc>${url}</loc>
      </sitemap>`
    );
  }

  return items.join("");
}
