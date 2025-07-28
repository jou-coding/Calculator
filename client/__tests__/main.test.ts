import { describe, it, expect } from "vitest";
import { Calculation } from "../src/app/Calculation";

describe("計算のテスト", () => {
  const calc = new Calculation();

  it("getの単体テスト", () => {
    expect(calc.get()).toBe(0);
  });

  it("足し算のテスト", () => {
    expect(calc.add(2)).toBe(2);
  });

  it("引き算のテスト", () => {
    calc.clear();
    calc.add(4);
    expect(calc.sub(2)).toBe(2);
  });

  it("掛け算のテスト", () => {
    calc.clear();
    calc.add(4);
    expect(calc.mul(2)).toBe(8);
  });

  it("割り算のテスト", () => {
    calc.clear();
    calc.add(4);
    expect(calc.div(4)).toBe(1);
  });

  it("clearの単体テスト", () => {
    expect(calc.clear()).toBe(0);
  });
});
