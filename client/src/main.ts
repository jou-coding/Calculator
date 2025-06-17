const body = document.body;

const table = document.createElement("talbe");
body.append(table);
const tbody = document.createElement("tbody");
table.append(tbody);

export function setupEvents() {
  const arg1 = document.getElementById("1arg");
  const arg2 = document.getElementById("2arg");
  const plusbtn = document.getElementById("plusbtn");
  const answer = document.getElementById("answer");

  plusbtn?.addEventListener("click", () => {
    //ユーザーが入力した後に読み取る必要がある。
    const number1 = arg1 instanceof HTMLInputElement ? arg1.value : null;
    const number2 = arg2 instanceof HTMLInputElement ? arg2.value : null;

    if (number1 && number2) {
      const result = dentaku.add(Number(number1), Number(number2));
      if (answer) {
        answer.textContent = String(result);
      }
    }
  });
  return {
    plusbtn,
    answer,
  };
}

setupEvents();
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

export class Calculation {
  constructor() {}
  add = (a: number, b: number) => {
    return a + b;
  };
  sub = (a: number, b: number) => {
    return a - b;
  };

  mul = (a: number, b: number) => {
    return a * b;
  };

  div = (a: number, b: number) => {
    return a / b;
  };
}
const dentaku = new Calculation();
