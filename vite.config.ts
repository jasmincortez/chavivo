import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join, parse, resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  build: {
    rollupOptions: {
      input: entryPoints("index.html", "404.html"),
    },
  },
});

function entryPoints(...paths) {
  const entries = paths.map(parse).map((entry) => {
    const { dir, base, name, ext } = entry;
    const key = join(dir, name);
    const path = resolve(__dirname, dir, base);
    return [key, path];
  });

  const config = Object.fromEntries(entries);
  return config;
}
