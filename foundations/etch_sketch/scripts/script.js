const gridContainer = document.querySelector('.grid');
const clearButton = document.querySelector('.btn__clear');

// Creates gridSize number of divs and append them to a div gridSize number of times.
let createGrid = (gridSize) => {
    for (let row = 1; row <= gridSize; row++) {
        gridRow = document.createElement('div');
        gridRow.classList.add('grid__row')
        for (let column = 1; column <= gridSize; column++) {
            gridColumn = document.createElement('div');
            gridColumn.classList.add('grid__column');
            gridRow.appendChild(gridColumn);
        }
        gridContainer.appendChild(gridRow);
    }
    // Adding Event Listeners
    gridItems = document.querySelectorAll('.grid__column');
    gridItems.forEach(element => {
        element.addEventListener('mouseenter', () => element.classList.add('active')) 
        element.addEventListener('click', () => element.classList.add('active')) 
    });
} 

// Remove the grid
function removeGrid(gridSize) {
    for(let row = 1; row <= gridSize; row++) {
        gridRow = document.querySelector('.grid__row');
        gridContainer.removeChild(gridRow);
    }
}

// Create grid
let gridSize = 16;
createGrid(gridSize);
    
// Button for clearing
clearButton.addEventListener('click', () => {
    removeGrid(gridSize);
    gridSize = Number(prompt("Enter a number between 1 and 100"));
    while ((!gridSize) || (0 > gridSize) || (gridSize > 100)) {
        gridSize = Number(prompt("Enter a number between 1 and 100"));
    }
    createGrid(gridSize);
});