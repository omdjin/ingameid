/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ingame.farizal.id",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/google-play-giftcard",
        destination: "/products/google-play-giftcard",
        permanent: true,
      },
      {
        source: "/ragnarok-m-eternal-love-zeny",
        destination: "/products/ragnarok-m-eternal-love-zeny",
        permanent: true,
      },
      {
        source: "/diamond-starlight-member-mobile-legend",
        destination: "/products/diamond-starlight-member-mobile-legend",
        permanent: true,
      },
      {
        source: "/steam-wallet-code",
        destination: "/products/steam-wallet-code",
        permanent: true,
      },
      {
        source: "/pubgm-unknown-cash",
        destination: "/products/pubgm-unknown-cash",
        permanent: true,
      },
      {
        source: "/megaxus-mi-cash",
        destination: "/products/megaxus-mi-cash",
        permanent: true,
      },
    ];
  },
};

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(nextConfig);
