
const body = document.body;

const container = document.getElementById("container");

function createGrid() {
  const totalSquares = 16 * 16; // 256

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
      container.appendChild(square);
  }
}
createGrid();

