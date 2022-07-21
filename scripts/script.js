const grid = document.querySelector(".divgrid");

function createGrid(x) {
    for (let i = 0; i < x; i++) {
        const gridRow = document.createElement("div");
        gridRow.className = "gridrow";
        for (let j = 0; j < x; j++) {
            const gridCell = document.createElement("div");
            gridCell.className = "gridcell";
            gridCell.innerText = "t"
            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }
}
