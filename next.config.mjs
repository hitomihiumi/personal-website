/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        compiler: "modern",
        silenceDeprecations: ["legacy-js-api"],
    },
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: false
    },
    images: {
        unoptimized: true
    }
};

export default nextConfig;