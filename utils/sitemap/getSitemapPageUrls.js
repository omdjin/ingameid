import { SITEMAP_PER_PAGE, API_SITEMAP } from "constants/index";

export default async function getSitemapPageUrls({ type, page }) {
  let url = `${API_SITEMAP}/posts?pageNo=${page}&postType=${type}&perPage=${SITEMAP_PER_PAGE}`;

  if (type === "category" || type === "tag") {
    url = `${API_SITEMAP}/taxonomy?pageNo=${page}&taxonomyType=${type}&perPage=${SITEMAP_PER_PAGE}`;
  }

  const responsePosts = await fetch(url);
  const data = await responsePosts.json();

  return data ?? [];
}
