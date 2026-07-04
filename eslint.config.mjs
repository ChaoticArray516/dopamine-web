// ESLint 9 flat config + Next 15 (eslint-config-next 15 使用旧版 eslintrc 格式，需 FlatCompat 包装)
// Next 16 生成的原 flat config 直接 spread 数组，与 Next 15 不兼容；降级后改用 FlatCompat
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/**", ".contentlayer/**", ".open-next/**", ".wrangler/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
