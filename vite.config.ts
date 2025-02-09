import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { glob } from "glob";
import styleX from "vite-plugin-stylex";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "BrillioReactComponents",
      formats: ["es"],
      // the proper extensions will be added
      fileName: "brillio-react-components",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", { ignore: ["src/**/*.d.ts"] })
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({ tsconfigPath: "./tsconfig.build.json" }),
    styleX(),
  ],
});
