const DIV = document.querySelector('.container');
const DIV_WIDTH = DIV.offsetWidth;
const DIV_HEIGHT = DIV.offsetHeight;

const SQUARE_DIV = document.createElement('div');
SQUARE_DIV.className = 'default';
DIV.appendChild(SQUARE_DIV);
let SQUARE_DIV_WIDTH = SQUARE_DIV.offsetWidth;
// DIV_WIDTH - border width.
const NUM_OF_SQUARE_ROW = (DIV_WIDTH - 4) / SQUARE_DIV_WIDTH;
const NUM_OF_SQUARE_COL = NUM_OF_SQUARE_ROW;

let NUM_OF_SQUARE = NUM_OF_SQUARE_ROW * NUM_OF_SQUARE_COL;
console.log(NUM_OF_SQUARE);

function createDefaultGrid(row) {
    for (let i = 1; i < row; i++) {
        const SQUARE_DIV = document.createElement('div');
        SQUARE_DIV.className = 'default';
        DIV.appendChild(SQUARE_DIV);        
    }
}

createDefaultGrid(NUM_OF_SQUARE);

function hovering(e) {
    e.target.style.backgroundColor = 'black';
}

const SQUARE = document.querySelectorAll('.default');
for (const sqr of SQUARE){
    sqr.addEventListener('mouseover', hovering)
}

function Grid() {
    NUM_OF_SQUARE = prompt("How many squares per side? \n(max 100)");
    SQUARE_DIV_WIDTH = (DIV_WIDTH - 4) / NUM_OF_SQUARE;
    NUM_OF_SQUARE *= NUM_OF_SQUARE;
    console.log(SQUARE_DIV_WIDTH);
    while (DIV.hasChildNodes()) {
        DIV.removeChild(DIV.firstChild);
      }

      for (let i = 1; i <= NUM_OF_SQUARE; i++) {
        const SQUARE_DIV = document.createElement('div');
        SQUARE_DIV.className = 'newSquare';
        SQUARE_DIV.style.width = SQUARE_DIV_WIDTH + 'px';
        SQUARE_DIV.style.height = SQUARE_DIV_WIDTH + 'px';
        DIV.appendChild(SQUARE_DIV);        
    }

    const SQUARE = document.querySelectorAll('.newSquare');
for (const sqr of SQUARE){
    sqr.addEventListener('mouseover', hovering)
}
}

const BUTTON = document.querySelector('#newGrid');
BUTTON.addEventListener('click', Grid);

