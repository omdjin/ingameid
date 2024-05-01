import useFetch from "hooks/useFetch";
import LatestBlog from "./index";

export default function FetcherProvider() {
  const { data, error, isLoading } = useFetch(
    `/posts?_embed=wp:featuredmedia,wp:term&categories=10&page=1&per_page=6`
  );

  if (error || !data || data.length < 1) {
    return null;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return <LatestBlog data={data} />;
}
