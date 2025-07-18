import { $ } from "../lib/$.js";
export function createTable() {
  const main: HTMLElement | null = $("container");
  if (main === null) {
    console.error("main is null");
    return;
  }

  const table = document.createElement("table");
  main.append(table);
  const tbody = document.createElement("tbody");
  table.append(tbody);
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i <= 2; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j <= 2; j++) {
      const td = document.createElement("td");
      const data = num.pop();
      td.textContent = String(data);

      td.id = `num-${String(data)}`;
      tr.append(td);
    }
    tbody.append(tr);
  }
}
