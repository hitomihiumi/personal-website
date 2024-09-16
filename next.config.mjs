/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: false
    },
    swcMinify: false,
    images: {
        unoptimized: true
    }
};

export default nextConfig;