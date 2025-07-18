import { describe, it, expect, beforeEach } from "vitest";
import { setupEvents } from "../src/main";
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
    expect(calc.sub(2, 1)).toBe(1);
  });

  it("掛け算のテスト", () => {
    expect(calc.mul(2, 3)).toBe(6);
  });

  it("割り算のテスト", () => {
    expect(calc.div(4, 2)).toBe(2);
  });

  it("clearの単体テスト", () => {
    expect(calc.clear()).toBe(0);
  });
});

describe("setupEvents", () => {
  //宣言
  let arg: HTMLInputElement;
  let plusbtn: HTMLButtonElement;
  let answer: HTMLParagraphElement;
  let equal: HTMLButtonElement;

  Number;
  const calc = new Calculation();

  beforeEach(() => {
    document.body.innerHTML = `
    <input id="arg" />
    <button id="plusbtn">⁺</button>
    <button id="equal">=</button>
    <p id="answer"></p>
    `;

    arg = document.getElementById("arg") as HTMLInputElement;
    plusbtn = document.getElementById("plusbtn") as HTMLButtonElement;
    answer = document.getElementById("answer") as HTMLParagraphElement;
    equal = document.getElementById("equal") as HTMLButtonElement;

    setupEvents(calc);
  });

  it("二つの数字を加算して、結果を出す", () => {
    arg.value = String(5);
    plusbtn.click();
    arg.value = String(7);
    plusbtn.click();
    equal.click();
    expect(answer.textContent).toBe("12");
  });

  it("もし空なら、何も表示しない", () => {
    plusbtn.click();
    expect(answer.textContent).toBe("");
  });
});
