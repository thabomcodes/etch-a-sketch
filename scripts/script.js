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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var col = '#';
    for (var i = 0; i < 6; i++) {
        col += letters[Math.floor(Math.random() * 16)];
    }
    return col;
}

grid10percentColor = []
function draw(div) {

    if (mode == "color") {
        const r = parseInt(color.value.substr(1, 2), 16)
        const g = parseInt(color.value.substr(3, 2), 16)
        const b = parseInt(color.value.substr(5, 2), 16)
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        var cellColor = [r, g, b];
        var percent10 = [];
        for (let i = 0; i < 3; i++) {
            percent10[i] = Math.round(cellColor[i] * 0.1);
        }
        grid10percentColor[parseInt(div.id)] = percent10;
        console.log(div.style.backgroundColor);
    }
    else if (mode == "rgb") {
        div.style.backgroundColor = getRandomColor();
        var cellColor = div.style.backgroundColor.match(/([0-9]+)/g).map(Number);
        var percent10 = [];
        for (let i = 0; i < 3; i++) {
            percent10[i] = Math.round(cellColor[i] * 0.1);
        }
        grid10percentColor[parseInt(div.id)] = percent10;
        console.log(div.style.backgroundColor);
    }
    else if (mode == "darken") {
        if (div.style.backgroundColor == "") {
            div.style.backgroundColor = getRandomColor();
            const cellColor = div.style.backgroundColor.match(/([0-9]+)/g).map(Number);

            var percent10 = [];
            for (let i = 0; i < 3; i++) {
                percent10[i] = Math.round(cellColor[i] * 0.1);
            }
            grid10percentColor[parseInt(div.id)] = percent10;
            console.log(div.style.backgroundColor + "if");
        }
        else {
            var rgb = div.style.backgroundColor.match(/([0-9]+)/g).map(Number);
            let rgb10 = grid10percentColor[parseInt(div.id)];
            let r = rgb[0] - rgb10[0];
            let g = rgb[1] - rgb10[1];
            let b = rgb[2] - rgb10[2];
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            console.log(div.style.backgroundColor + "else");
        }
    }
    else {
        div.style.backgroundColor = "";
        grid10percentColor[parseInt(div.id)] = [];
    }
}

function createGrid(x, cellBorder = true) {
    // remove rows if any
    const rows = document.querySelectorAll(".gridrow");
    rows.forEach((row) => {
        grid.removeChild(row);
    });
    // create new divs
    let count = 1;
    for (let i = 0; i < x; i++) {
        const gridRow = document.createElement("div");
        gridRow.className = "gridrow";
        for (let j = 0; j < x; j++) {
            const gridCell = document.createElement("div");
            gridCell.className = "gridcell";
            gridCell.id = `${count}`
            grid10percentColor[parseInt(gridCell.id)] = [];
            gridCell.style.width = `${grid.clientWidth / x}px`;
            gridCell.style.height = `${grid.clientHeight / x}px`;
            if (cellBorder) gridCell.style.border = "1px solid black";
            else gridCell.style.border = "none";
            gridRow.appendChild(gridCell);
            count++;
        }
        grid.appendChild(gridRow);
    }
    var cells = document.querySelectorAll(".gridcell");
    // EFFECTS
    for (const cell of cells) {
        cell.addEventListener("mouseover", () => draw(cell), false);
    }
}
createGrid(range.value);
previousEvent = false;

//============= EVENT LISTENERS ================

// EFFECTS

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



