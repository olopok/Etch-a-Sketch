const CONTAINER = document.querySelector('.container');
const CONTAINER_WIDTH = CONTAINER.offsetWidth;
const CONTAINER_HEIGHT = CONTAINER.offsetHeight;
console.log(CONTAINER_WIDTH, CONTAINER_HEIGHT);

const BUTTON = document.querySelector('button');
BUTTON.addEventListener('click', newGrid);


let defaultSquareNumber = 16;
let defaultSquareWidth = (CONTAINER_WIDTH - 4) / defaultSquareNumber;
let defaultSquareHeight = (CONTAINER_WIDTH - 4) / defaultSquareNumber;
console.log(defaultSquareNumber, defaultSquareWidth, defaultSquareHeight);

function grid(squareN, squareW, squareH) {
    for (i = 0; i <= squareN * squareN; i++) {
        const DIV = document.createElement('div');
        DIV.className = 'square';
        DIV.style.width = `${squareW + 'px'}`;
        DIV.style.height = `${squareH + 'px'}`;
        CONTAINER.appendChild(DIV);
    }
    let div = document.querySelectorAll('.square');
    for (const d of div) {
        d.addEventListener('mouseover', randomBackgroundColor);
    } 
}

grid(defaultSquareNumber, defaultSquareWidth, defaultSquareHeight);

function newGrid () {
    defaultSquareNumber = prompt("How many squares per side? \n(max 100)");
    defaultSquareWidth = (CONTAINER_WIDTH - 4) / defaultSquareNumber;
    defaultSquareHeight = (CONTAINER_WIDTH - 4) / defaultSquareNumber;
    while (CONTAINER.hasChildNodes()) {
        CONTAINER.removeChild(CONTAINER.firstChild);
      }

      grid(defaultSquareNumber, defaultSquareWidth, defaultSquareHeight);
      
}


function randomBackgroundColor(e) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    e.target.style.backgroundColor = bgColor;
}

