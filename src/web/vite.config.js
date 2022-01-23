import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import reactSvgPlugin from "vite-plugin-react-svg";
import { visualizer } from "rollup-plugin-visualizer";

const srcPath = path.join(__dirname, "src/");
const atomicPath = path.join(srcPath, "atomic/");

export default defineConfig(({ mode }) => ({
  server: {
    port: 3000,
  },
  build: {
    outDir: path.join(__dirname, "public"),
    target: "esnext",
    rollupOptions: {
      plugins: [
        mode === "analyze" &&
          visualizer({
            open: true,
            filename: "public/analyzed.html",
            gzipSize: true,
            brotliSize: true,
          }),
      ],
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  plugins: [
    react(),
    reactSvgPlugin({
      defaultExport: "component",
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@react",
        replacement: srcPath,
      },
      {
        find: "@svg",
        replacement: path.join(srcPath, "svg/"),
      },
      {
        find: "@hooks",
        replacement: path.join(srcPath, "hooks/"),
      },
      {
        find: "@models",
        replacement: path.join(srcPath, "models/"),
      },
      {
        find: "@services",
        replacement: path.join(srcPath, "services/"),
      },
      {
        find: "@helpers",
        replacement: path.join(srcPath, "helpers/"),
      },
      {
        find: "@pages",
        replacement: path.join(atomicPath, "pages/"),
      },
      {
        find: "@templates",
        replacement: path.join(atomicPath, "templates/"),
      },
      {
        find: "@organisms",
        replacement: path.join(atomicPath, "organisms/"),
      },
      {
        find: "@molecules",
        replacement: path.join(atomicPath, "molecules/"),
      },
      {
        find: "@atoms",
        replacement: path.join(atomicPath, "atoms/"),
      },
      {
        find: "@routers",
        replacement: path.join(atomicPath, "routers/"),
      },
    ],
  },
}));
