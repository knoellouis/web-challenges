import { getRandomColor } from "../../utils/randomColor.js";

export const Square = document.createElement("div");
Square.classList.add("square");
Square.addEventListener("click", () => {
  Square.style.backgroundColor = getRandomColor();
});
