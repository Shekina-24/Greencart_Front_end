/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Unsplash (already used)
      { protocol: "https", hostname: "images.unsplash.com" },
      // Bing thumbnails (previous issue)
      { protocol: "https", hostname: "th.bing.com" },
      // Railway backend (production uploads)
      { protocol: "https", hostname: "greencartbackend-production-554a.up.railway.app", pathname: "/**" },
      // Local API uploads (FastAPI /static/uploads)
      { protocol: "http", hostname: "localhost", port: "8000", pathname: "/**" },
      { protocol: "http", hostname: "127.0.0.1", port: "8000", pathname: "/**" }
    ]
  },
  headers: async () => ([
    {
      source: "/admin/:path*",
      headers: [
        { key: "Content-Security-Policy", value: "frame-ancestors 'self'; frame-src 'self' https://app.powerbi.com https://*.powerbi.com;" }
      ]
    }
  ])
};

export default nextConfig;