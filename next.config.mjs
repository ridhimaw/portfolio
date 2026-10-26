// Next.js settings.
// output: "export"  -> builds plain HTML/CSS/JS into the /out folder,
//                      which is exactly what GitHub Pages can host.
// basePath          -> your site lives at ridhimaw.github.io/<repo-name>,
//                      so every link needs that prefix. The GitHub workflow
//                      fills it in automatically from the repo name.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
