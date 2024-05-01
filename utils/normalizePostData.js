import { HOSTNAME, SITE_NAME } from "constants/index";
import getPostImage from "utils/getPostImage";
import getTaxonomies from "utils/getTaxonomies";
import removeHTMLTags from "utils/removeHTMLTags";

export const normalizeProducts = (posts) => {
  return [
    ...posts.map((item) => {
      const post = { ...item };
      delete post.format;
      delete post.content;
      delete post.excerpt;
      delete post.guid;
      delete post.meta;
      delete post.yoast_head;
      delete post.yoast_head_json;
      delete post.date;
      delete post.author;
      delete post.comment_status;
      delete post.template;
      delete post.ping_status;
      delete post.sticky;
      delete post.modified;
      delete post.modified_gmt;
      delete post.status;
      delete post.categories;
      delete post.tags;
      delete post.brand;
      delete post.link;
      delete post.type;
      delete post._links;
      delete post.featured_media;
      delete post.date;
      delete post.date_gmt;

      return post;
    }),
  ];
};

export const normalizePostWidget = (posts) => {
  return [
    ...posts.map((item) => {
      const post = { ...item };
      delete post.format;
      delete post.content;
      delete post.guid;
      delete post.meta;
      delete post.yoast_head;
      delete post.yoast_head_json;
      delete post.author;
      delete post.comment_status;
      delete post.template;
      delete post.ping_status;
      delete post.sticky;
      delete post.modified;
      delete post.modified_gmt;
      delete post.status;
      delete post.categories;
      delete post.tags;
      delete post.brand;
      delete post.link;
      delete post.type;
      delete post._links;
      delete post.featured_media;
      delete post.date_gmt;

      return {
        ...post,
        _embedded: {
          "wp:featuredmedia": post._embedded["wp:featuredmedia"],
        },
      };
    }),
  ];
};

export const normalizeTagDetail = (tag) => {
  return {
    id: tag.id,
    name: tag.name,
    slug: tag.slug,
    description: tag.description,
  };
};

export const normalizePostDetail = (post) => {
  const wpTerm = post._embedded["wp:term"];
  const taxonomies = getTaxonomies(wpTerm);
  const postImage = getPostImage(post);
  const postTitle = removeHTMLTags(post.title.rendered).replace(/\n/g, "");
  const parsedExcerpt = removeHTMLTags(post.excerpt.rendered)
    .replace(/\n/g, "")
    .replace("[&hellip;]", "...");
  const yoastDesc = post?.yoast_head_json?.description;
  const metaDesc = yoastDesc || parsedExcerpt;
  const authorAvatar =
    "https://secure.gravatar.com/avatar/6e9b17ce6105c1f6725b6bd35c158b4b?s=96&d=mm&r=g";
  const ldJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NewsMediaOrganization", "Organization"],
        id: `${HOSTNAME}/#organization`,
        name: SITE_NAME,
        url: HOSTNAME,
        sameAs: [
          "https://www.instagram.com/id.ingame/",
          "https://www.tiktok.com/@tkpd.nightwish",
        ],
        logo: {
          "@type": "ImageObject",
          id: `${HOSTNAME}/#logo`,
          url: "https://ingame.id/static/icons/android-icon-192x192.png",
          contentUrl: "https://ingame.id/static/icons/android-icon-192x192.png",
          caption: SITE_NAME,
          inLanguage: "id",
          width: 192,
          height: 192,
        },
      },
      {
        "@type": "NewsArticle",
        headline: postTitle,
        image: [postImage.url],
        datePublished: `${post.date_gmt}+07:00`,
        dateModified: `${post.modified_gmt}+07:00`,
        articleSection: taxonomies["post_tag"]
          .map((item) => item.name)
          .join(", "),
        author: [
          {
            "@type": "Person",
            name: "Ingame",
            url: HOSTNAME,
            image: {
              "@type": "ImageObject",
              id: authorAvatar,
              url: authorAvatar,
              caption: "Ingame",
              inLanguage: "id",
            },
            worksFor: {
              "@id": `${HOSTNAME}/#organization`,
            },
          },
        ],
        copyrightYear: "2024",
        copyrightHolder: {
          "@id": `${HOSTNAME}/#organization`,
        },
        publisher: {
          "@id": `${HOSTNAME}/#organization`,
        },
        description: metaDesc,
        name: postTitle,
      },
    ],
  });

  return {
    blogPost: {
      id: post.id,
      title: post.title,
      content: post.content,
      slug: post.slug,
      title: post.title,
    },
    ldJson: ldJson,
    taxonomies: taxonomies || {},
    postImage,
    metaDesc,
  };
};

export const normalizePageDetail = (post) => {
  const parsedExcerpt = removeHTMLTags(post.excerpt.rendered)
    .replace(/\n/g, "")
    .replace("[&hellip;]", "...");
  const yoastDesc = post?.yoast_head_json?.description;
  const metaDesc = yoastDesc || parsedExcerpt;

  return {
    blogPost: {
      title: post.title,
      content: post.content,
      slug: post.slug,
    },
    metaDesc,
  };
};
