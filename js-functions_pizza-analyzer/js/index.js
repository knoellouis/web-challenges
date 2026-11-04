console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');

const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');

const outputSection = document.querySelector('[data-js="output-section"]');
const output = document.querySelector('[data-js="output"]');

// Event listeners
pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  updatePizzaDisplay(pizza1, pizzaSize1);
  handleInputEvent();
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize2 = pizzaInput2.value;
  updatePizzaDisplay(pizza2, pizzaSize2);
  handleInputEvent();
});

// Task 1: Calculate pizza gain
function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;

  const area1 = Math.PI * radius1 ** 2;
  const area2 = Math.PI * radius2 ** 2;

  const pizzaGainPercentage = ((area2 - area1) / area1) * 100;

  return Math.round(pizzaGainPercentage);
}

// Handle input events
function handleInputEvent() {
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);

  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);

  output.textContent = pizzaGain;

  updateOutputColor(pizzaSize1, pizzaSize2);
}

// Task 2: Update pizza display
function updatePizzaDisplay(pizzaElement, newSize) {
  const newWidth = (newSize / 24) * 100;

  pizzaElement.style.width = `${newWidth}px`;
}

// Task 3: Update output color
function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
