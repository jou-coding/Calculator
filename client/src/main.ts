import { Calculation } from "./app/Calculation.js";
import { createTable } from "./ui/table.js";

export function setupEvents(calc: Calculation) {
  const $ = (id: string) => document.getElementById(id);
  const arg = $("arg");
  const plusbtn = $("plusbtn");
  const answer = $("answer");
  const equal = $("equal");

  for (let i = 1; i <= 9; i++) {
    const btn = $(`num-${i}`);

    btn?.addEventListener("click", () => {
      if (arg instanceof HTMLInputElement) {
        arg.value = arg.value + String(i);
      }
    });
  }

  plusbtn?.addEventListener("click", () => {
    if (arg instanceof HTMLInputElement) {
      const number = arg.value;
      calc.add(Number(number));
      calc.setOperater("+");
      arg.value = "";
    }
  });

  equal?.addEventListener("click", () => {
    if (
      answer &&
      calc.getOperater() === "+" &&
      arg instanceof HTMLInputElement
    ) {
      const number = Number(arg?.value);
      answer.textContent = String(calc.get() + number);
      calc.clear();
      calc.setOperater("");
      arg.value = "";
    }
  });

  return {
    plusbtn,
    answer,
  };
}

function main() {
  const calc = new Calculation();
  createTable();
  setupEvents(calc);
}

main();
