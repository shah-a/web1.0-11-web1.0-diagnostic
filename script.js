const widthDisplay = document.querySelector("width");
const heightDisplay = document.querySelector("height");
const colorDisplay = document.querySelector("color");
const boxDisplay = document.querySelector("color-box");

function updateValue(property) {

}

function updateBoxSize(width, height) {

}

function updateBoxColor(color) {

}

widthDisplay.addEventListener("change", () => {
  updateValue();
  updateBoxSize();
})

heightDisplay.addEventListener("change", () => {
  updateValue();
  updateBoxSize();
})

colorDisplay.addEventListener("change", updateBoxColor);
