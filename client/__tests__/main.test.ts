import { add, sub } from "../src/main";

describe("計算のテスト", () => {
  test("足し算のテスト", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("引き算のテスト", () => {
    expect(sub(2, 1)).toBe(1);
  });
});
