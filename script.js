const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
const clear = document.querySelector('#clear');
let size = 16;
createGrid(size);

/* function createGrid (size) {
    for (i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.classList.add('empty');
        square.addEventListener("mousedown", () =>{
            square.classList.add('draw');
        });
        square.addEventListener("mouseover", () =>{
            if (mouseDown)
            square.classList.add('draw');
        });
        container.appendChild(square);
    };
};
 */
btn.addEventListener('click', () => {
    container.innerHTML = ''
    let size = prompt("input size", 16);
    if (size > 100) {
        alert("Maximum sise: 100")
    } else
    createGrid(size);
});

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid (size) {
    container.style.gridTemplateColumns = (`repeat(${size}, 1fr`);
    container.style.gridTemplatecells = (`repeat(${size}, 1fr`);

    for (i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener("mousedown", () => {
            cell.classList.add('draw');
        });
        cell.addEventListener("mouseover", () => {
            if (mouseDown)
            cell.classList.add('draw');
        });
        container.appendChild(cell);
    };
    
};

clear.addEventListener('click', () => {
    filledItems = document.querySelectorAll('.draw');
    for (let i = 0; i < filledItems.length; i++) {
        filledItems[i].classList.remove('draw');
      }
});

