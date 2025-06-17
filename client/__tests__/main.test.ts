import { describe, test, expect, beforeEach } from "vitest";
import { add, sub, mul, div, getInputValuest } from "../src/main";

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

describe("getInputValue", () => {
  beforeEach(() => {
    // テストごとにDOMをリセット
    document.body.innerHTML = `
      <input type="number" id="1arg" value="42" />
      <input type="number" id="2arg" value="7" />
    `;
  });
  test("インプットエレメントを数字をゲットする", () => {
    const { number1, number2,plusbtn,answer } = getInputValuest();

    expect(number1).toBe("42");
    expect(number2).toBe("7");
  });
});
