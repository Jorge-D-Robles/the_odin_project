function regenerateGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let newRow = document.createElement('div');
        newRow.classList.add("row");
        gameBoard.appendChild(newRow);
        for (let j = 0; j < gridSize; j++) {
            let newCol = document.createElement('div');
            newCol.classList.add("col");
            newCol.dataset.interactions = 0;
            newCol.addEventListener('mouseover', () => {
                let interactions = Number(newCol.dataset.interactions);
                interactions++;
                newCol.dataset.interactions = interactions;
                let opacity = interactions * 0.2;

                let [r, g, b] = myRandomColor();
                newCol.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            });
            newRow.appendChild(newCol);
        }
    }
}

function myRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

function resetGrid() {
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
}
const gameBoard = document.querySelector('.game');
let gridSize = 16;
regenerateGrid(gridSize);
//add button, button will change nxn grid size
const btn = document.querySelector('.prompt')
btn.addEventListener('click', () => {
    gridSize = prompt('Input a number from 4 to 100.');
    while (gridSize > 101 || gridSize < 4) gridSize = prompt('Input a number from 4 to 100.')
    resetGrid();
    regenerateGrid(gridSize);
});
const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
    resetGrid();
    regenerateGrid(gridSize);
})
