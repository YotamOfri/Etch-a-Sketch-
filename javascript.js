const board = document.querySelector(".board");
const color = document.querySelector(".btn-color");
const range = document.querySelector(".btn-range");
const range_lable = document.querySelector(".range-label");
const clear = document.querySelector(".clear");
const erase = document.querySelector(".erase");
const paint_mode = document.querySelector(".paint_Mode");
const dark_mode = document.querySelector(".DarkMode");
let darkmode = false;
let color_main = "#0d1b2a";
let color_second = "white";
// pressed color
let pressed = false;
document.body.onmouseup = () => (pressed = false);
document.body.onmousedown = () => (pressed = true);
// buttons setup
clear.addEventListener("click", size);
range.addEventListener("click", size);
paint_mode.addEventListener("click", function (e) {
  board.querySelectorAll("div").forEach((child) =>
    child.addEventListener("mouseover", function (e) {
      if (pressed) this.style.background = color.value;
    })
  );
});
erase.addEventListener("click", function (e) {
  board.querySelectorAll("div").forEach((child) =>
    child.addEventListener("mouseover", function (e) {
      if (pressed) this.style.background = `white`;
    })
  );
});
// dark mode

function change_color_main() {
  dark_mode.innerHTML =
    dark_mode.innerHTML == "Darkmode"
      ? "Lightmode"
      : dark_mode.innerHTML == "Lightmode"
      ? "Darkmode"
      : dark_mode.innerHTML;
  dark_mode.style.color = color_second;
  document.querySelector(".header-a").style.color = color_second;
  document.body.style.backgroundColor = color_main;
  document.querySelector(".Title").style.color = color_second;
  document.querySelector(".buttons-container").querySelector("p").style.color =
    color_second;
  document
    .querySelector(".buttons-container")
    .querySelectorAll("label")
    .forEach((child) => {
      child.style.color = color_second;
    });
  document
    .querySelector(".mode-container")
    .querySelectorAll("button")
    .forEach((child) => {
      child.style.backgroundColor = color_second;
      child.style.color = color_main;
    });
}
dark_mode.addEventListener("click", function (e) {
  if (!darkmode) {
    color_main = "#0d1b2a";
    color_second = "white";
    change_color_main();
    darkmode = true;
  } else {
    color_main = "white";
    color_second = "#0d1b2a";
    change_color_main();
    darkmode = false;
  }
});
generateBoard(40, 40);
// on click hover effect / paint
//
//
function rangeSlide(value) {
  range_lable.innerHTML = `${range.value} X ${range.value}`;
}
function size() {
  board.querySelectorAll("div").forEach((child) => child.remove());
  generateBoard(range.value, range.value);
}
// generate board
function generateBoard(row, colunm) {
  for (let i = 0; i < row * colunm; i++) {
    let div = document.createElement("div");
    div.style.cssText = `width:${700 / row}px; height:${700 / colunm}px`;
    div.classList.add("square");
    div.addEventListener("mouseover", function (e) {
      if (pressed) this.style.background = color.value;
    });
    board.append(div);
  }
}
