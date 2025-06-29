export function createTable() {
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
