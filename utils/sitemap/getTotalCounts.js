import { API_SITEMAP } from "constants/index";

export default async function getTotalCounts() {
  const url = `${API_SITEMAP}/totalpages`;

  const responsePosts = await fetch(url);
  const data = await responsePosts.json();

  if (!data) return [];

  const propertyNames = Object.keys(data);
  const excludeItems = ["category", "user", "page"];
  //if you want to remove any item from sitemap, add it to excludeItems array
  const totalArray = propertyNames
    .filter((name) => !excludeItems.includes(name))
    .map((name) => {
      return { name, total: data[name] };
    });

  return totalArray;
}
