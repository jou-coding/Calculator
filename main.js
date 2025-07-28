"use strict";
(() => {
  // src/app/Calculation.ts
  var Calculation = class {
    constructor() {
      this.result = 0;
      this.operater = "";
    }
    get() {
      return this.result;
    }
    setOperater(operater) {
      this.operater = operater;
    }
    getOperater() {
      return this.operater;
    }
    clear() {
      this.result = 0;
      return this.result;
    }
    add(a) {
      this.result = this.result + a;
      return this.result;
    }
    sub(a) {
      if (this.result === 0) {
        this.result = a;
        return;
      }
      this.result = this.result - a;
      return this.result;
    }
    mul(a) {
      if (this.result === 0) {
        this.result = a;
        return;
      }
      this.result = this.result * a;
      return this.result;
    }
    div(a) {
      if (this.result === 0) {
        this.result = a;
        return;
      }
      this.result = this.result / a;
      return this.result;
    }
  };

  // src/lib/$.ts
  function $(id) {
    const dom = document.getElementById(id);
    return dom;
  }

  // src/ui/table.ts
  function createTable() {
    const main2 = $("container");
    if (main2 === null) {
      console.error("main is null");
      return;
    }
    const table = document.createElement("table");
    table.id = "calcTable";
    main2.append(table);
    const tbody = document.createElement("tbody");
    tbody.id = "calc";
    table.append(tbody);
    let num = ["+", "=", "", 0, "-", 3, 2, 1, "*", 6, 5, 4, "/", 9, 8, 7];
    for (let i = 0; i <= 3; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j <= 3; j++) {
        const td = document.createElement("td");
        const data = num.pop();
        if (typeof data === "string") {
          td.textContent = String(data);
          td.id = `${String(data)}`;
          tr.append(td);
        } else {
          td.textContent = String(data);
          td.id = `num-${String(data)}`;
          tr.append(td);
        }
      }
      tbody.append(tr);
    }
  }

  // src/main.ts
  function setupEvents(calc) {
    const $2 = (id) => document.getElementById(id);
    const arg = $2("arg");
    const answer = $2("answer");
    for (let i = 0; i <= 9; i++) {
      const btn = $2(`num-${i}`);
      btn?.addEventListener("click", () => {
        if (arg instanceof HTMLInputElement) {
          arg.value = arg.value + String(i);
        }
      });
    }
    const mul = ["+", "-", "*", "/", "=", "."];
    for (const item of mul) {
      const btn = $2(`${item}`);
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
      answer
    };
  }
  function main() {
    const calc = new Calculation();
    createTable();
    setupEvents(calc);
  }
  main();
})();
//# sourceMappingURL=main.js.map
