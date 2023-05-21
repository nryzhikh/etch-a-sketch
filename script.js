const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
const clear = document.querySelector('#clear');
let size = 16;
createGrid(size);
const randomColor = Math.floor(Math.random()*16777215).toString(16);

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
        let opacity = 0;
        cell.addEventListener("mousedown", () => {
            let randomColor =  Math.floor(Math.random()*16777215).toString(16);
            let opa1 = opacity + 0.1;
            cell.style.backgroundColor = "#" + randomColor;
            cell.style.opacity = opa1;
            opacity = opa1;
        });
        cell.addEventListener("mouseover", () => {
            if (mouseDown) {
            let randomColor =  Math.floor(Math.random()*16777215).toString(16);
            let opa1 = opacity + 0.1;
            cell.style.backgroundColor = "#" + randomColor;
            cell.style.opacity = opa1;
            opacity = opa1;
            };
        });
        container.appendChild(cell);
    };
    
};

clear.addEventListener('click', () => {
    filledItems = document.querySelectorAll('.cell');
    for (let i = 0; i < filledItems.length; i++) {
        filledItems[i].style.backgroundColor = 'blue';
      }
});

