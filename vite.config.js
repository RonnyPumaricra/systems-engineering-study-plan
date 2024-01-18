import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = true;
// const folderName = path.basename(process.cwd()) + "/";
const folderName = "systems-engineering-study-plan";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  mode,
  build: {
    outDir: "dist",
  },
  plugins: [react()],
})
