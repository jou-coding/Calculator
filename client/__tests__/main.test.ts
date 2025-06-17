import { describe, test, expect, beforeEach } from "vitest";
import { Calculation, setupEvents } from "../src/main";

describe("計算のテスト", () => {
  const calc = new Calculation();
  test("足し算のテスト", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("引き算のテスト", () => {
    expect(calc.sub(2, 1)).toBe(1);
  });

  test("掛け算のテスト", () => {
    expect(calc.mul(2, 3)).toBe(6);
  });

  test("割り算のテスト", () => {
    expect(calc.div(4, 2)).toBe(2);
  });
});

describe("setupEvents", () => {
  //宣言
  let arg1: HTMLInputElement;
  let arg2: HTMLInputElement;
  let plusbtn: HTMLButtonElement;
  let answer: HTMLParagraphElement;
  const calc = new Calculation();

  beforeEach(() => {
    // テストごとにDOMをリセット
    document.body.innerHTML = `
    <input id="1arg" />
    <input id="2arg"/>
    <button id="plusbtn">プラスボタン</button>
    <p id="answer"></p>
    `;

    arg1 = document.getElementById("1arg") as HTMLInputElement;
    arg2 = document.getElementById("2arg") as HTMLInputElement;
    plusbtn = document.getElementById("plusbtn") as HTMLButtonElement;
    answer = document.getElementById("answer") as HTMLParagraphElement;

    setupEvents(calc);
  });

  test("二つの数字を加算して、結果を出す", () => {
    arg1.value = String(5);
    arg2.value = String(10);
    plusbtn.click();

    expect(answer.textContent).toBe("15");
  });

  test("もし空なら、何も表示しない", () => {
    plusbtn.click();
    expect(answer.textContent).toBe("");
  });
});
