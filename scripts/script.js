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
