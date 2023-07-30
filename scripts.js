const DEFAULT_SIZE = 16;

const gridContainer = document.querySelector('#gridContainer');

gridContainer.setAttribute('style', 'width: 30em; height: 30em; border: 2px solid black');

function divCreator () {
    return document.createElement('div');
}

function addHover (div) {
    div.addEventListener('mouseover', () => {
        div.setAttribute('style', 'background: black');
    })
}

function createGrid (rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let rows = divCreator();
        rows.classList.add('gridRow');
        gridContainer.appendChild(rows);

        for (let j = 0; j < rowNum; j++) {
            let box = divCreator();
            box.classList.add('gridBox');
            rows.appendChild(box);

            addHover(box);
            
        }

    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function clearBackground() {
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach(box => box.style.background = 'white');
}

const sizeChange = document.querySelector('#sizeChange');
createGrid(DEFAULT_SIZE);
sizeChange.addEventListener('click', () => {
    let rowNum = prompt('How many squares per side do you want?', 16);
    clearGrid();
    createGrid(rowNum);
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    clearBackground();
})

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    clearGrid();
    createGrid(DEFAULT_SIZE);
})

