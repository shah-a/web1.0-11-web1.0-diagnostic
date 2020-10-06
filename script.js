const widthInput = document.querySelector("#width-input");
const heightInput = document.querySelector("#height-input");
const colorInput = document.querySelector("#color-input");

const widthDisplay = document.querySelector("#width-display");
const heightDisplay = document.querySelector("#height-display");
const colorDisplay = document.querySelector("#color-display");
const boxDisplay = document.querySelector("#color-box");

function updateWidth() {
  const widthValue = widthInput.value;
  widthDisplay.innerHTML = `${widthValue}px`;
}
function updateHeight() {
  const heightValue = heightInput.value;
  heightDisplay.innerHTML = `${heightValue}px`;
}

function updateColor() {
  const colorValue = colorInput.value;
  colorDisplay.innerHTML = `${colorValue}`;
}

function updateBoxSize() {
  const width = parseInt(widthInput.value);
  const height = parseInt(heightInput.value);
  boxDisplay.style.width = `${width}px`;
  boxDisplay.style.height = `${height}px`;
}

function updateBoxColor() {
  const color = colorInput.value;
  boxDisplay.style.backgroundColor = `${color}`;
}

widthInput.addEventListener("input", () => {
  updateWidth();
  updateBoxSize();
})

heightInput.addEventListener("input", () => {
  updateHeight();
  updateBoxSize();
})

colorInput.addEventListener("input", () => {
  updateColor();
  updateBoxColor();
})
