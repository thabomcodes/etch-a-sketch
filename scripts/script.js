//============ QUERY SLECTORS ====================
const color = document.querySelector("input[type=color");
// modes
const colorModeBtn = document.querySelector("#color-mode");
const hoverModeBtn = document.querySelector("#hover-mode");
const rgbModeBtn = document.querySelector("#rgb-mode");
const darkenModeBtn = document.querySelector("#darken-mode");
const eraserModeBtn = document.querySelector("#eraser-mode");
// extra
const range = document.querySelector("#range");
const gridSizes = document.querySelectorAll(".grid-size");
gridSizes.forEach((size) => size.innerText = `${range.value}`);

const clearBtn = document.querySelector("#clear");
const hideGridBtn = document.querySelector("#hide-grid");
// grid
const grid = document.querySelector(".divgrid");

function createGrid(x) {
    // remove rows if any
    const rows = document.querySelectorAll(".gridrow");
    rows.forEach((row) => {
        grid.removeChild(row);
    });
    // create new divs
    for (let i = 0; i < x; i++) {
        const gridRow = document.createElement("div");
        gridRow.className = "gridrow";
        for (let j = 0; j < x; j++) {
            const gridCell = document.createElement("div");
            gridCell.className = "gridcell";
            gridCell.style.width = `${grid.clientWidth / x}px`;
            gridCell.style.height = `${grid.clientHeight / x}px`;
            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }
}
createGrid(range.value);
var mode;
//============= EVENT LISTENERS ================
const modeButtons = document.querySelectorAll(".modes button");
function removeActive() {
    modeButtons.forEach((button) => {
        button.className = "";
    })
}
// buttons
colorModeBtn.addEventListener('click', function () {
    removeActive()
    this.className = "active";
    mode = "color";
});
hoverModeBtn.addEventListener('click', function () {
    removeActive();
    this.className = "active";
    mode = "hover";
});
rgbModeBtn.addEventListener('click', function () {
    removeActive()
    this.className = "active";
    mode = "rgb";
});
darkenModeBtn.addEventListener('click', function () {
    removeActive()
    this.className = "active";
    mode = "darken";
});
eraserModeBtn.addEventListener('click', function () {
    removeActive()
    this.className = "active";
    mode = "eraser";
});
// range
range.addEventListener('input', () => {
    gridSizes.forEach((size) => {
        size.innerText = `${range.value}`;
        createGrid(range.value);
    });
});
// clear
clearBtn.addEventListener('click', () => {
    createGrid(range.value);
});
// hide grid 
hideGridBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll(".gridcell");
    cells.forEach((cell) => {
        cell.style.border = "none";
    });
});
