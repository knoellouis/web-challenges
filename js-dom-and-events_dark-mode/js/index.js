console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const addDarkModeButton = document.querySelector(
  '[data-js="dark-mode-button"]',
);
const removeDarkModeButton = document.querySelector(
  '[data-js="light-mode-button"]',
);
const toggleDarkModeButton = document.querySelector(
  '[data-js="toggle-button"]',
);
addDarkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
removeDarkModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});
toggleDarkModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
