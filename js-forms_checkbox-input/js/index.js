console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// function toggleTosError() {
//   tosError.toggleAttribute("hidden");
// }

function showSuccessMessage() {
  successMessage.removeAttribute("hidden", "");
}

tosCheckbox.addEventListener("click", () => {
  if (!tosError.hasAttribute("hidden")) {
    tosError.setAttribute("hidden", "");
  } else {
    tosError.removeAttribute("hidden");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    return;
  } else {
    hideTosError();
    // eslint-disable-next-line no-alert
    showSuccessMessage();
    alert("Form submitted");
  }

  // --^-- write your code here --^--
});
