const DIV = document.querySelector('.container');
const DIV_WIDTH = DIV.offsetWidth;
const DIV_HEIGHT = DIV.offsetHeight;
const SQUARE_DIV = document.createElement('div');
SQUARE_DIV.className = 'default';
DIV.appendChild(SQUARE_DIV);
const SQUARE_DIV_WIDTH = SQUARE_DIV.offsetWidth;
// DIV_WIDTH - border width.
const NUM_OF_SQUARE_ROW = (DIV_WIDTH - 4) / SQUARE_DIV_WIDTH;
const NUM_OF_SQUARE_COL = NUM_OF_SQUARE_ROW;
const NUM_OF_SQUARE = NUM_OF_SQUARE_ROW * NUM_OF_SQUARE_COL;
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