/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'roar.media',
            port: '',
            pathname: '/wp-content/**',
          },
        ],
      },
      async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'X-Frame-Options',
                value: 'DENY'
              },
            ],
          },
        ];
      },
      distDir: 'build'
}

module.exports = nextConfig
