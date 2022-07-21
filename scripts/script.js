//============ QUERY SLECTORS ====================
const color = document.querySelector("input[type=color");
// modes
const colorModeBtn = document.querySelector("#color-mode");
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
var mode = "color";
var mode2 = "";

function createGrid(x, cellBorder = true) {
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
            if (cellBorder) gridCell.style.border = "1px solid black";
            else gridCell.style.border = "none";
            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }
    var cells = document.querySelectorAll(".gridcell");
    // EFFECTS
    for (const cell of cells) {
        cell.addEventListener("hover", () => {
            cell.style.backgroundColor = color.value;

        });
    };
}
createGrid(range.value);

//============= EVENT LISTENERS ================
function removeActive() {
    document.querySelectorAll(".modes button").forEach((button) => {
        button.className = "";
        mode = "";
    });
}
// buttons
colorModeBtn.addEventListener('click', function () {
    removeActive()
    this.className = "active";
    mode = "color";
});
rgbModeBtn.addEventListener('click', function () {
    removeActive();
    this.className = "active";
    mode = "rgb";
});
darkenModeBtn.addEventListener('click', function () {
    removeActive();
    this.className = "active";
    mode = "darken";
});
eraserModeBtn.addEventListener('click', function () {
    removeActive();
    this.className = "active";
    mode = "eraser";
});
// range
range.addEventListener('input', () => {
    gridSizes.forEach((size) => {
        size.innerText = `${range.value}`;
        createGrid(range.value, hideGridBtn.innerText == "Hide grid");
    });
});
// clear
clearBtn.addEventListener('click', () => {
    createGrid(range.value, hideGridBtn.innerText == "Hide grid");
});
// hide grid 
hideGridBtn.addEventListener('click', () => {
    var cells = document.querySelectorAll(".gridcell");
    if (hideGridBtn.innerText.toLowerCase() == "hide grid") {
        cells.forEach((cell) => {
            cell.style.border = "none";
            hideGridBtn.innerText = "Show grid";
        });
    } else {
        cells.forEach((cell) => {
            cell.style.border = "1px solid black";
            hideGridBtn.innerText = "Hide grid";
        });
    }
});


