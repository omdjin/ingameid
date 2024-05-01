import Link from "next/link";
import Image from "next/image";
import getPostImage from "utils/getPostImage";

import { postItem, styExcerpt, styImgContainer } from "./styles.css";

const PostCard = ({ detail, isFeatured = false, isImagePrio = false }) => {
  const postTitle = detail.title.rendered;
  const postImage = getPostImage(detail);

  const postExcerpt = (detail.excerpt.rendered || "").replace(
    "[&hellip;]",
    "..."
  );
  const datePosted = new Date(detail.date);
  const dateFormatted = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(datePosted);

  return (
    <div className={postItem}>
      <article>
        <div>
          <Link
            href={`/blog/${detail.slug}`}
            title={postImage.alt}
            rel="nofollow"
            className={styImgContainer}
          >
            <Image
              src={postImage.url}
              alt={postImage.alt}
              width={postImage.w}
              height={postImage.h}
              priority={isImagePrio}
            />
          </Link>
          <h2>
            <Link
              href={`/blog/${detail.slug}`}
              dangerouslySetInnerHTML={{ __html: postTitle }}
            />
          </h2>
          <div className="meta">
            <span className="date">{dateFormatted}</span>
          </div>
          {isFeatured && (
            <div
              className={styExcerpt}
              dangerouslySetInnerHTML={{ __html: postExcerpt }}
            />
          )}
        </div>
      </article>
    </div>
  );
};

export default PostCard;
