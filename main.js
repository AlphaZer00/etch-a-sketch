const gridContainer = document.querySelector(".grid-container");
const backgroundColorPicker = document.querySelector(".background-color-input");
const untouchedBoxes = document.getElementsByClassName("boxes untouched");

const boxes = gridContainer.querySelectorAll("div");

updateGridSize(16);

const sliderInput = document.querySelector(".slide");
const penColorPicker = document.querySelector(".pen-color-input");
backgroundColorPicker.addEventListener("onchange", changeBackgroundColor());
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearGrid);
const eraserButton = document.querySelector(".eraser");
eraserButton.addEventListener("click", toggleEraserStatus);
const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", toggleRainbowMode);

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
    
    boxes.forEach((div) => div.remove());
    clearGrid();
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
let mouseDownCheck = false
document.body.onmousedown = function() {
    mouseDownCheck = true;
}
document.body.onmouseup = function() {
    mouseDownCheck = false;
}

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDownCheck) return
    if (eraserStatus) {
        this.classList.add("untouched");
        Array.from(untouchedBoxes).forEach((div) => {
            div.style.backgroundColor = backgroundColorPicker.value;
        })
    }else if (rainbowMode === true) {
        this.classList.remove("untouched");
        let newRandomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = newRandomColor;
    } else {
        this.classList.remove("untouched");
        this.style.backgroundColor = penColorPicker.value;
    }
}

function changeBackgroundColor() {
    Array.from(untouchedBoxes).forEach((div) => {
        div.style.backgroundColor = backgroundColorPicker.value;
    })
}

function clearGrid() {
    const boxes = gridContainer.childNodes;
    boxes.forEach((div) => {
        div.classList.add("untouched");
        div.style.backgroundColor= backgroundColorPicker.value;
    })
}

let eraserStatus=false;
function toggleEraserStatus() { 
    eraserButton.classList.toggle("active");
    if (rainbowMode === true) {
        rainbowMode = !rainbowMode;
        rainbowButton.classList.toggle("active");
    }
    eraserStatus = !eraserStatus;
    console.log(eraserStatus);
}

let rainbowMode = false;
function toggleRainbowMode() {
    rainbowButton.classList.toggle("active");
    if (eraserStatus === true) {
        eraserStatus = !eraserStatus;
        eraserButton.classList.toggle("active");
    }
    rainbowMode = !rainbowMode;
    console.log(rainbowMode);
}