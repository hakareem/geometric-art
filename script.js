const btn = document.getElementById("btn");
const shapes = [];
const colors = ["#510bcd", "#ff3f03", "#08fc12", "#e8ff07","#ff0185","#ff7e01"];

const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
  boxes.forEach((box) => {
    let i = Math.floor(Math.random() * shapes.length);
    let j = Math.floor(Math.random() * colors.length);
    box.classList.add(shapes[i]);
    box.style.backgroundColor = colors[j];
  });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);
