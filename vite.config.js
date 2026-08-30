import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Define a configuração principal do Vite e habilita o suporte ao React.
export default defineConfig({
  plugins: [react()],
});
