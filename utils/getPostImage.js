const getPostImage = (blogPost) => {
  const featuredmedia = blogPost._embedded["wp:featuredmedia"]?.[0];

  if (!featuredmedia) {
    return {
      alt: "",
      url: "https://ingame.farizal.id/wp-content/uploads/GPX-Mayy.webp",
      w: 600,
      h: 400,
    };
  }

  const mediaDetails = featuredmedia.media_details;
  const mediaSizes = mediaDetails.sizes;

  if (mediaSizes.large) {
    return {
      alt: featuredmedia.alt_text,
      url: mediaSizes.large.source_url,
      w: mediaSizes.large.width,
      h: mediaSizes.large.height,
    };
  }

  return {
    alt: featuredmedia.alt_text,
    url: featuredmedia.source_url,
    w: mediaDetails.width || 600,
    h: mediaDetails.height || 400,
  };
};

export default getPostImage;
