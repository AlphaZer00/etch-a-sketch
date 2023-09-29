
const gridContainer = document.querySelector(".grid-container");
updateGridSize(16);

const sliderInput = document.querySelector(".slide");
const squares = gridContainer.querySelectorAll("div");
console.log(squares);


// Update Range Slider Input
const number = document.querySelector(".slider-num");
sliderInput.addEventListener("input", () => {
    size = sliderInput.value;
    number.textContent= size;
    updateGridSize(size);
});



function updateGridSize(num) {
    
    gridContainer.style.gridTemplateColumns = `repeat(${num} , 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num} , 1fr)`;
    //squares.forEach((div) => div.remove());
    amount = num * num;

    for (let i=0; i < amount; i++) {
        const box = document.createElement("div");
        gridContainer.appendChild(box);
        box.classList.add("boxes");
    };
}

let mouseDownCheck = 0
document.body.onmousedown = function() {
    ++mouseDownCheck;
}
document.body.onmouseup = function() {
    --mouseDownCheck;
}

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDownCheck) return
    this.classList.add("hovered");
}

    squares.forEach((div) => {
       div.addEventListener("mouseover", changeColor) 
    });

    squares.forEach((div) => {
        div.addEventListener("mousedown", changeColor) 
     }); 





