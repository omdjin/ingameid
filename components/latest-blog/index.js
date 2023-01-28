import Link from "next/link";
import parse from "html-react-parser";

import { sectionStyle } from "./styles.css";

export default function LatestBlog({ data }) {
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
