// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  basePath: "/brian",
  experimental: {
    serverActions: true,
  },
  transpilePackages: [
    "@dls/web",
    "@dls/assets",
    "@lux",
    "@geit/ui-components",
    "@geit/core",
  ],
  compiler: {
    // https://styled-components.com/docs/advanced#nextjs
    styledComponents: true,
  },
  productionBrowserSourceMaps:
    process.env.NEXT_PUBLIC_ENABLE_SOURCE_MAP === "true",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/, // for importing dynatrace.txt
      type: "asset/source",
    });
    return config;
  },
};

if (process.env.NEXT_PUBLIC_DISABLE_ROOT === "true") {
  nextConfig.redirects = async () => {
    return [
      {
        source: "/brian",
        destination: "/",
        basePath: false,
        permanent: false,
      },
    ];
  };
}

// https://github.com/mswjs/msw/issues/690#issuecomment-849552403
nextConfig.headers = async () => {
  return [
    {
      // Append the "Service-Worker-Allowed" header
      // to each response, overriding the default worker's scope.
      source: "/(.*)",
      headers: [
        {
          key: "Service-Worker-Allowed",
          value: "/",
        },
      ],
    },
  ];
};

module.exports = nextConfig;
