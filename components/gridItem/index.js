import Image from "next/image";
import Link from "next/link";

import {
  gridItem,
  itemClear,
  itemContainer,
  itemImage,
  itemOverlay,
  itemWrapper,
} from "./styles.css";

const GridItem = ({ detail }) => {
  const featuredmedia = detail._embedded["wp:featuredmedia"][0];
  const mediaDetails = featuredmedia.media_details;
  const mediaSizes = mediaDetails.sizes;

  return (
    <div className={gridItem}>
      <Link href={`/products/${detail.slug}`}>
        <div className={itemWrapper}>
          <div className={itemContainer}>
            <Image
              src={mediaSizes.medium.source_url}
              alt={featuredmedia.alt_text}
              className={itemImage}
              width={283}
              height={283}
              priority
            />
          </div>
          <div className={itemClear} />
        </div>
        <div className={itemOverlay}>
          <h2 dangerouslySetInnerHTML={{ __html: detail.title.rendered }} />
        </div>
      </Link>
    </div>
  );
};

export default GridItem;
