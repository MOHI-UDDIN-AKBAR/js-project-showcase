const FIXED_COLORS = [
  "coral",
  "turquoise",
  "lavender",
  "salmon",
  "magenta",
  "peach",
  "mint",
  "sage",
  "plum",
  "teal",
];
const HEX_CHARACTERS = "0123456789ABCDEF";
const HEX_LENGTH = 6;
const CLASS_NAME = "active-btn";
const SIMPLE_COLOR = "simple-color";
const HEX_COLOR = "hex-color";
const COLOR_TYPES = [SIMPLE_COLOR, HEX_COLOR];
const DEFAULT_SIMPLE_COLOR = FIXED_COLORS[0];
const DEFAULT_HEX_COLOR = "#A6AC1F";

//  Dom Element
const container = document.querySelector(".container");
const simpleBtn = document.getElementById("simple-btn");
const hexBtn = document.getElementById("hex-btn");
const generateColorBtn = document.getElementById("generate-color-btn");
const colorContainer = document.querySelector(".color-content strong");

// Functions
function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

function getSimpleColor(colors) {
  return colors[getRandomNumber(colors.length)];
}

function getRandomHexColor(hexCharacters, HEX_LENGTH) {
  return `#${Array.from(
    { length: HEX_LENGTH },
    () => hexCharacters[Math.floor(Math.random() * hexCharacters.length)]
  ).join("")}`;
}

function getColorType() {
  return simpleBtn.classList.contains(CLASS_NAME) ? SIMPLE_COLOR : HEX_COLOR;
}

// Default Active button
simpleBtn.classList.add(CLASS_NAME);

// Default Color
colorContainer.textContent = FIXED_COLORS[0];
container.style.backgroundColor = FIXED_COLORS[0];

// Random Color
function updateColor(color) {
  colorContainer.textContent = color;
  container.style.backgroundColor = color;
}

// Events

simpleBtn.addEventListener("click", () => {
  updateColor(DEFAULT_SIMPLE_COLOR);

  const hexBtnClassList = hexBtn.classList;
  if (hexBtnClassList.contains(CLASS_NAME)) {
    hexBtnClassList.remove(CLASS_NAME);
  }
  simpleBtn.classList.add(CLASS_NAME);
});

hexBtn.addEventListener("click", () => {
  updateColor(DEFAULT_HEX_COLOR);
  const simpleBtnClassList = simpleBtn.classList;
  if (simpleBtnClassList.contains(CLASS_NAME)) {
    simpleBtnClassList.remove(CLASS_NAME);
  }
  hexBtn.classList.add(CLASS_NAME);
});

generateColorBtn.addEventListener("click", () => {
  const colorType = getColorType();

  if (colorType === COLOR_TYPES[0]) {
    const simpleColor = getSimpleColor(FIXED_COLORS);
    updateColor(simpleColor);
  } else if (colorType === COLOR_TYPES[1]) {
    const hexColor = getRandomHexColor(HEX_CHARACTERS, HEX_LENGTH);
    updateColor(hexColor);
  }
});
