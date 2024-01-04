const container = document.querySelector(".container");

// will create 16 boxes and place them inside the main container as initial value
for (let x = 0; x < 16; x++) {
  const grid_container = document.createElement("div");
  container.appendChild(grid_container);
  grid_container.className = "grid_container";
  for (let y = 0; y < 16; y++) {
    const grid = document.createElement("div");
    grid.className = "grid_boxes";
    grid_container.appendChild(grid);
  }
}
// this is the individual boxes within
const grids = document.querySelectorAll(".grid_boxes");
gridBackgroundChange();

//this is the div going across from left to right
const grid_container = document.querySelectorAll(".grid_container");

// all this does it select the button and removes all children of the main container if the value
// is within 1-50. Going over 50 causes overflow unless the container is massive which
// i don't want. all children are replaced equally for example "50" will give 50 boxes and
// 50 divs going across thus 50x50.

const button = document.querySelector("#size_button");
button.addEventListener("click", () => {
  let user_size = +prompt("Choose grid size(1- 100): ");
  if (typeof user_size === "number" && user_size > 0 && user_size < 101) {
    container.replaceChildren();
    for (let x = 0; x < user_size; x++) {
      const grid_container = document.createElement("div");
      grid_container.className = "grid_container";
      container.appendChild(grid_container);
      for (let x = 0; x < user_size; x++) {
        const grid = document.createElement("div");
        grid.className = "grid_boxes";
        grid_container.appendChild(grid);
      }
    }
    gridBackgroundChange();
  }
});

const reset_button = document.querySelector("#reset_button");

reset_button.addEventListener("click", resetColour);

// this is used to change background when mouse is over a small box.
function gridBackgroundChange() {
  const grids = document.querySelectorAll(".grid_boxes");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.background = "blue";
    });
  });
}

function resetColour() {
  const grids = document.querySelectorAll(".grid_boxes");
  grids.forEach((grid) => {
    grid.style.background = "#e5e7eb";
  });
}
