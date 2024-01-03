const container = document.querySelector(".container");

// will create 16 boxes and place them inside the main container
for (let x = 0; x < 16; x++) {
  const grid = document.createElement("div");
  container.appendChild(grid);
}

const grids = document.querySelectorAll(".container div");

grids.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.style.background = "red";
  });
});
