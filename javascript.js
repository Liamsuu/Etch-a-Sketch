const container = document.querySelector(".container");

// will create 16 boxes and place them inside the main container as initial value
for (let x = 0; x < 16; x++) {
  const grid = document.createElement("div");
  container.appendChild(grid);
}
const grids = document.querySelectorAll(".container div");
gridBackgroundChange();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let user_size = +prompt("Choose grid size(1- 100): ");
  if (typeof user_size === "number" && user_size > 0 && user_size < 101) {
    grids.forEach((grid) => {
      grid.remove();
    });
    for (let x = 0; x < user_size; x++) {
      const grid = document.createElement("div");
      container.appendChild(grid);
    }
    gridBackgroundChange();
  }
});

function gridBackgroundChange() {
  const grids = document.querySelectorAll(".container div");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.background = "red";
    });
  });
}
