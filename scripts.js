const gridContainer = document.querySelector('#gridContainer');

gridContainer.setAttribute('style', 'width: 32em; height: 32em; border: 2px solid black');

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
            let cols = divCreator();
            cols.classList.add('gridCol');
            rows.appendChild(cols);

            addHover(cols);
        }

    }
}
// let rowNum = prompt('What should the dimensions be?', 0);
createGrid(10);

