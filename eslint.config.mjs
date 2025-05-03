import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Removed extensions to disable rules inherited from them
const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript"), // Disabled by removing
];

export default eslintConfig;
