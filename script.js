
const body = document.body;

const button = document.createElement("button");
button.innerHTML = "HIT ME!";
button.classList.add("button");
body.appendChild(button);


const container = document.getElementById("container");

function createGrid() {
  const totalSquares = 16 * 16; 

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#333";
    });
    square.addEventListener("mouseleave", ()=> {
        square.style.backgroundColor = "orange";
    });
      container.appendChild(square);
  }
}
createGrid();



