import PostCard from "components/postCard";

import { row, sectionStyle, headingStyle } from "./styles.css";

export default function LatestBlog({
  data,
  title = "Artikel Terbaru",
  usePrioImage = false,
}) {
  return (
    <section className={sectionStyle}>
      <h2 className={headingStyle}>{title}</h2>
      <div className={row}>
        {data.map((blogPost, index) => {
          return (
            <PostCard
              detail={blogPost}
              key={blogPost.id}
              isImagePrio={usePrioImage && index === 0}
            />
          );
        })}
      </div>
    </section>
  );
}
