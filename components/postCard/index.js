import Link from "next/link";
import Image from "next/image";
import getPostImage from "utils/getPostImage";

import { postItem } from "./styles.css";

const PostCard = ({ detail }) => {
  const postTitle = detail.title.rendered;
  const postImage = getPostImage(detail);

  const postExcerpt = (detail.excerpt.rendered || "").replace(
    "[&hellip;]",
    "..."
  );

  return (
    <div className={postItem}>
      <article>
        <div>
          <h2>
            <Link
              href={`/blog/${detail.slug}`}
              dangerouslySetInnerHTML={{ __html: detail.title.rendered }}
            />
          </h2>
          <Link href={`/blog/${detail.slug}`} title={postImage.alt}>
            <Image
              src={postImage.url}
              alt={postImage.alt}
              width={postImage.w}
              height={postImage.h}
            />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: postExcerpt }} />
        </div>
      </article>
    </div>
  );
};

export default PostCard;
