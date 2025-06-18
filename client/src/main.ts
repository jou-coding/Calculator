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

function createTable() {
  const body = document.body;

  const table = document.createElement("table");
  body.append(table);
  const tbody = document.createElement("tbody");
  table.append(tbody);
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i <= 2; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j <= 2; j++) {
      const td = document.createElement("td");
      const data = num.pop();
      td.textContent = String(data);

      td.classList.add(`num-${j}`);
      tr.append(td);
    }
    tbody.append(tr);
  }
}

export class Calculation {
  private result = 0;

  get() {
    return this.result;
  }

  clear() {
    this.result = 0;
    return this.result
  }

  add(a: number) {
    this.result = this.result + a;
    return this.result;
  }
  sub(a: number, b: number) {
    return a - b;
  }

  mul(a: number, b: number) {
    return a * b;
  }

  div(a: number, b: number) {
    return a / b;
  }
}

function main() {
  const calc = new Calculation();
  setupEvents(calc);
  createTable();
}

main();
