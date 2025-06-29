import { Calculation } from "./app/Calculation.js";
import { createTable } from "./ui/table.js";

export function setupEvents(calc: Calculation) {
  const $ = (id: string) => document.getElementById(id);
  const arg = $("arg");
  const plusbtn = $("plusbtn");
  const answer = $("answer");
  const equal = $("equal");

  plusbtn?.addEventListener("click", () => {
    if (arg instanceof HTMLInputElement) {
      const number = arg.value;
      calc.add(Number(number));
      arg.value = "";
    }
  });

  equal?.addEventListener("click", () => {
    if (answer) {
      answer.textContent = String(calc.get());
      calc.clear();
    }
  });

  return {
    plusbtn,
    answer,
  };
}

function main() {
  const calc = new Calculation();
  setupEvents(calc);
  createTable();
}

main();
