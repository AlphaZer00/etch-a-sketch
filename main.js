
const gridContainer = document.querySelector(".grid-container");
updateGridSize(16);

const sliderInput = document.querySelector(".slide");
const squares = gridContainer.querySelectorAll("div");
const penColorPicker = document.querySelector(".pen-color-input");
const backgroundColorPicker = document.querySelector(".background-color-input");
const untouchedBoxes = document.getElementsByClassName("boxes untouched");
backgroundColorPicker.addEventListener("onchange", changeBackgroundColor());

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
    amount = num * num;

    for (let i=0; i < amount; i++) {
        const box = document.createElement("div");
        gridContainer.appendChild(box);
        box.classList.add("boxes");
        box.classList.add("untouched");
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
    this.classList.remove("untouched");
    this.style.backgroundColor = penColorPicker.value;
}

    squares.forEach((div) => {
       div.addEventListener("mouseover", changeColor) 
    });

    squares.forEach((div) => {
        div.addEventListener("mousedown", changeColor) 
     }); 

function changeBackgroundColor() {
    Array.from(untouchedBoxes).forEach((div) => {
        div.style.backgroundColor = backgroundColorPicker.value;
    })
}