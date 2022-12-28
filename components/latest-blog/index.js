import Link from "next/link";
import parse from "html-react-parser";
import useFetch from "hooks/useFetch";

import { sectionStyle } from "./styles.css";

export default function LatestBlog() {
  const { data, error, isLoading } = useFetch(
    `/posts?_embed=wp:term&categories=10&page=1&per_page=5`
  );

  if (error || !data || data.length < 1) {
    return null;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <section className={sectionStyle}>
      <h2>Latest Blog Posts</h2>
      <ol>
        {data.map((item) => {
          const title = item.title.rendered;
          const parsedTitle = parse(title);
          return (
            <li key={item.id}>
              <Link href={`/blog/${item.slug}`}>{parsedTitle}</Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
