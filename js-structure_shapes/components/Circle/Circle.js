import { getRandomColor } from "../../utils/randomColor.js";

export const Circle = document.createElement("div");
Circle.classList.add("circle");
Circle.addEventListener("click", () => {
  Circle.style.backgroundColor = getRandomColor();
});
