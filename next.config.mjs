/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Photos Emma uploads in the editing area are stored in Vercel Blob.
    remotePatterns: [{ protocol: "https", hostname: "*.public.blob.vercel-storage.com" }],
  },
  experimental: {
    serverActions: { bodySizeLimit: "4mb" },
  },
};

export default nextConfig;
