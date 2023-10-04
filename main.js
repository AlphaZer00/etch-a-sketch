
const gridContainer = document.querySelector(".grid-container");
const backgroundColorPicker = document.querySelector(".background-color-input");
const untouchedBoxes = document.getElementsByClassName("boxes untouched");
updateGridSize(16);

const sliderInput = document.querySelector(".slide");
const penColorPicker = document.querySelector(".pen-color-input");
backgroundColorPicker.addEventListener("onchange", changeBackgroundColor());
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearGrid);

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
    const boxes = gridContainer.querySelectorAll("div");
    boxes.forEach((div) => div.remove());

    for (let i=0; i < amount; i++) {
        const box = document.createElement("div");
        gridContainer.appendChild(box);
        box.classList.add("boxes");
        box.classList.add("untouched"); 
        box.addEventListener("mouseover", changeColor);
        box.addEventListener("mousedown", changeColor);
        box.style.backgroundColor = backgroundColorPicker.value;
    }
}

//Check if mouse is pressed down
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

function changeBackgroundColor() {
    Array.from(untouchedBoxes).forEach((div) => {
        div.style.backgroundColor = backgroundColorPicker.value;
    })
}

function clearGrid() {
    const boxes = gridContainer.childNodes;
    boxes.forEach((div) => {
        div.style.backgroundColor= backgroundColorPicker.value;
    })
}