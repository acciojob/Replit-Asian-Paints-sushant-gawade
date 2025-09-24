function cells() {
  const arr = [];
  for (let i = 1; i <= 9; i++) arr.push(document.getElementById(String(i)));
  return arr;
}

function resetAll() {
  cells().forEach((el) => (el.style.backgroundColor = "transparent"));
}

document.getElementById("change_button").addEventListener("click", () => {
  const id = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  resetAll(); // Clear previous colors

  const cell = document.getElementById(id);
  if (cell && color) {
    cell.style.backgroundColor = color;
  } else {
    alert("Please enter a valid block ID (1–9) and a color!");
  }
});

document.getElementById("reset_button").addEventListener("click", resetAll);
