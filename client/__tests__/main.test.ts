import { add } from "../src/main";

describe("計算のテスト", () => {
  test("足し算のテスト", () => {
    expect(add(2, 3)).toBe(5);
  });
});
