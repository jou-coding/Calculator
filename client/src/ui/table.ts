import { $ } from "../lib/$.js";
export function createTable() {
  const main: HTMLElement | null = $("container");
  if (main === null) {
    console.error("main is null");
    return;
  }

  const table = document.createElement("table");
  table.id = "calcTable";
  main.append(table);
  const tbody = document.createElement("tbody");
  tbody.id = "calc";
  table.append(tbody);

  let num = ["+", "=", ".", 0, "-", 3, 2, 1, "*", 6, 5, 4, "-", 9, 8, 7];

  for (let i = 0; i <= 3; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j <= 3; j++) {
      const td = document.createElement("td");
      const data = num.pop();
      td.textContent = String(data);
      td.id = `num-${String(data)}`;
      tr.append(td);
    }
    tbody.append(tr);
  }
}
