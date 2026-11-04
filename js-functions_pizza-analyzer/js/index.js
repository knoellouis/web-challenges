console.clear();

let pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
let pizza1 = document.querySelector('[data-js="pizza-1"]');
let pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
let pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
let output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // Write your code here
  handleInputEvent(pizzaInput1, pizzaInput2);
  updatePizzaDisplay(pizza1, pizzaInput1.value);
});

pizzaInput2.addEventListener("input", () => {
  // Write your code here
  handleInputEvent(pizzaInput1, pizzaInput2);
  updatePizzaDisplay(pizza2, pizzaInput2.value);
});

// Task 1: Define the function `calculatePizzaGain` here
function calculatePizzaGain(diameter1, diameter2) {
  let radiusPizza1 = diameter1 / 2;
  let radiusPizza2 = diameter2 / 2;
  let areaPizza1 = Math.PI * radiusPizza1 ** 2;
  let areaPizza2 = Math.PI * radiusPizza2 ** 2;
  let pizzaGainPercentage = ((areaPizza2 - areaPizza1) / areaPizza1) * 100;
  output.textContent = Math.round(pizzaGainPercentage);
}

function handleInputEvent(pizzaInput1, pizzaInput2) {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
}

// Task 2: Define the function `updatePizzaDisplay` here

function updatePizzaDisplay(pizzaElement, newSize) {
  let pizzaElementNewSize = (newSize / 24) * 100;
  pizzaElement.style.width = `${pizzaElementNewSize}px`;
}

// Task 3: Define the function `updateOutputColor` here
