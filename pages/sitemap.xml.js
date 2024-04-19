import getSitemapPages from "utils/sitemap/getSitemapPages";
import getTotalCounts from "utils/sitemap/getTotalCounts";

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const details = await getTotalCounts();

  const sitemapIndex = `<?xml version='1.0' encoding='UTF-8'?>
  <sitemapindex xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd"
           xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${details.map((item) => getSitemapPages(item)).join("")}
  </sitemapindex>`;
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );
  res.write(sitemapIndex);
  res.end();

  return {
    props: {},
  };
}
