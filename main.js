

// Update Range Slider Input
const sliderInput = document.querySelector("input");
const number = document.querySelector(".slider-num");
sliderInput.addEventListener("input", () => {
    size = sliderInput.value;
    updateGridSize(size);
    number.textContent= size;
});



function updateGridSize(size) {

    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    const squares = gridContainer.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    amount = sliderInput.value * sliderInput.value;

    for (let i=0; i < amount; i++) {
        const box = document.createElement("div");
        gridContainer.appendChild(box);
        box.classList.add("boxes");
    }
}

