import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // DOM使うなら必要
    include: ["__tests__/*.test.ts"], // テストファイルの場所
  },
});
