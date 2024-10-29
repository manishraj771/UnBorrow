// /** @type {import('next').NextConfig} */
// const nextConfig: import('next').NextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: [
//       'res.cloudinary.com', 
//       'avatars.githubusercontent.com',
//       'lh3.googleusercontent.com'
//     ]
//   }
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  }
};

module.exports = nextConfig;
