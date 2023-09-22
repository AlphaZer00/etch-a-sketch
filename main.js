window.onload = () => {
    updateGridSize(16);
}

// Update Range Slider Input
const sliderInput = document.querySelector("input");
const number = document.querySelector(".slider-num");
sliderInput.addEventListener("input", () => {
    size = sliderInput.value;
    number.textContent= size;
    updateGridSize(size);
});



function updateGridSize(num) {

    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${num} , 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num} , 1fr)`;
    const squares = gridContainer.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    amount = num * num;

    for (let i=0; i < amount; i++) {
        const box = document.createElement("div");
        gridContainer.appendChild(box);
        box.classList.add("boxes");
    }
}

