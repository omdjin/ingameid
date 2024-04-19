import { HOSTNAME } from "constants/index";
import getSitemapPageUrls from "utils/sitemap/getSitemapPageUrls";
import getTotalCounts from "utils/sitemap/getTotalCounts";
import generateSitemapPaths from "utils/sitemap/generateSitemapPaths";

export default function SitemapTagPage() {
  return null;
}

export async function getServerSideProps({ res, params: { slug } }) {
  let isXml = slug.endsWith(".xml");

  if (!isXml) {
    return {
      notFound: true,
    };
  }

  const slugArray = slug.replace(".xml", "").split("_");
  const type = slugArray[0];
  const pageNo = slugArray[1]?.match(/(\d+)/)[0] ?? null;
  const page = pageNo ? parseInt(pageNo) : null;
  const possibleTypes = await getTotalCounts();

  if (!possibleTypes.some((e) => e.name === type)) {
    return {
      notFound: true,
    };
  }

  const pageUrls = await getSitemapPageUrls({ type, page });
  if (!pageUrls?.length) {
    return {
      notFound: true,
    };
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${HOSTNAME}</loc>
    </url>
    ${generateSitemapPaths(pageUrls)}
  </urlset>`;
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );
  res.write(sitemap);
  res.end();
  return { props: {} };
}
