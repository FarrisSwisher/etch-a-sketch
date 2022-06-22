const sketchpad = document.querySelector('#sketchpad');
const pixelSize = document.querySelector('#pixelSize');
let selectedColor = "black";
reDrawGrid(pixelSize.value);



// FUNCTIONS
function reDrawGrid(num) {

    let sketchblock
    let basis = 100/num;
    //remove all existing blocks
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.firstChild);
    }
    //add new divs w/ dimensions num X num
    for (let i = 0; i<num; i++){
        for (let k = 0; k<num; k++){
            sketchblock = document.createElement('div');
            sketchblock.classList.add('sketchblock');
            sketchblock.addEventListener('mouseover', changeColor);
            sketchpad.appendChild(sketchblock);
        }
    }
    
    sketchblock = document.querySelectorAll('.sketchblock');
    sketchblock.forEach(block => block.style.flexBasis = `${basis}%`);
    
} 

function changeColor() {
    switch (selectedColor){
        case "black":
            this.style.backgroundColor = "#000000";
            break;
        case "random":
            this.style.backgroundColor = randomColor();
            break;
        case "erase":
            this.style.backgroundColor = "#FFFFFF";
            break;
        }
    
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function selectColor(color) {
    selectedColor = color;
}
