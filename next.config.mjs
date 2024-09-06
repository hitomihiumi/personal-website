/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.hitomihiumi.xyz',
                port: '',
                pathname: '/v1/users/**',
            },
        ],
    },
};

export default nextConfig;