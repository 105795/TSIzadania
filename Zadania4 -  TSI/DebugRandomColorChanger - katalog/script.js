const darkColorsArr = [
  "#4C3E50",
  "#34475E",
  "#3C1C2C",
  "#615A6B",
  "#4A235A",
  "#6F4G4F",
  "#0E4A5A",
  "#36454F",
  "#800020",
  "#7F2631"
];

function getRandomIndex() {
  return Math.floor(darkColorsArr.length * Math.random());
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];
  body.style.backgroundColor = color;
  bgHexCodeSpanElement.innerText = color;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", changeBackgroundColor);