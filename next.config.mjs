/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tells Next.js to export the project as static HTML files
  images: {
    unoptimized: true, // Disables Next.js Image Optimization, required for GitHub Pages
  },
//   assetPrefix: "./", // Ensures relative paths are used for assets like CSS and JS
  trailingSlash: true, // Ensures each page gets its own folder with an index.html file
};

export default nextConfig;
