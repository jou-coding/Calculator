import { Calculation } from "./app/Calculation.js";
import { createTable } from "./ui/table.js";

export function setupEvents(calc: Calculation) {
  const $ = (id: string) => document.getElementById(id);
  const arg = $("arg");
  const answer = $("answer");

  for (let i = 0; i <= 9; i++) {
    const btn = $(`num-${i}`);
    // 電卓で数字を並べているロジック
    btn?.addEventListener("click", () => {
      if (arg instanceof HTMLInputElement) {
        arg.value = arg.value + String(i);
      }
    });
  }
  const mul = ["+", "-", "*", "/", "=", "."];
  for (const item of mul) {
    const btn = $(`${item}`);
    btn?.addEventListener("click", () => {
      if (arg instanceof HTMLInputElement) {
        if (item === "+") {
          const number = arg.value;
          calc.add(Number(number));
          calc.setOperater("+");
          arg.value = "";
        } else if (item === "-") {
          const number = arg.value;
          calc.sub(Number(number));
          calc.setOperater("-");
          arg.value = "";
        } else if (item === "*") {
          const number = arg.value;
          calc.mul(Number(number));
          calc.setOperater("*");
          arg.value = "";
        } else if (item === "/") {
          const number = arg.value;
          calc.div(Number(number));
          calc.setOperater("/");
          arg.value = "";
        } else if (item === "=") {
          if (answer && arg instanceof HTMLInputElement) {
            if (calc.getOperater() === "+") {
              const number = Number(arg?.value);
              answer.textContent = String(calc.get() + number);
              calc.clear();
              calc.setOperater("");
              arg.value = "";
            } else if (calc.getOperater() === "-") {
              const number = Number(arg?.value);
              answer.textContent = String(calc.sub(number));
              calc.clear();
              calc.setOperater("");
              arg.value = "";
            } else if (calc.getOperater() === "*") {
              const number = Number(arg?.value);
              answer.textContent = String(calc.mul(number));
              calc.clear();
              calc.setOperater("");
              arg.value = "";
            } else if (calc.getOperater() === "/") {
              const number = Number(arg?.value);
              answer.textContent = String(calc.div(number));
              calc.clear();
              calc.setOperater("");
              arg.value = "";
            }
          }
        }
      }
    });
  }

  return {
    answer,
  };
}

function main() {
  const calc = new Calculation();
  createTable();
  setupEvents(calc);
}

main();
