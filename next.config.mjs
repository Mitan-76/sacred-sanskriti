/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/practices/Why-Do-We-Ring-Bells-in-Temples-practices",
        destination: "/practices/why-do-we-ring-bells-in-temples",
        permanent: true,
      },
      // These two articles were removed entirely (their source videos were
      // dead) rather than renamed, so there's no matching new article to
      // send old inbound links/search-index entries to — the category hub
      // is the nearest still-relevant destination.
      {
        source: "/practices/How_to_Reduce_Office_Stress",
        destination: "/practices",
        permanent: true,
      },
      {
        source: "/practices/OM_Chanting_and_the_Brain",
        destination: "/practices",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
