module.exports = {
  reactStrictMode: true,
  test: /\.svg$/,
  use: ["@svgr/webpack"],
  experimental: { images: { layoutRaw: true } },
};
