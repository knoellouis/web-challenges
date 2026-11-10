import { getRandomColor } from "../../utils/randomColor.js";

export const Pentagon = document.createElement("div");
Pentagon.classList.add("pentagon");
Pentagon.addEventListener("click", () => {
  Pentagon.style.backgroundColor = getRandomColor();
});
