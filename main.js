
const gridContainer = document.querySelector(".grid-container");

for (let i=0; i < 256; i++) {
    const box = document.createElement("div");
    gridContainer.appendChild(box);
    box.classList.add("boxes");
}



