import { add, sub, mul, div } from "../src/main";

describe("計算のテスト", () => {
  test("足し算のテスト", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("引き算のテスト", () => {
    expect(sub(2, 1)).toBe(1);
  });

  test("掛け算のテスト", () => {
    expect(mul(2, 3)).toBe(6);
  });

  test("割り算のテスト", () => {
    expect(div(4, 2)).toBe(2);
  });
});
