console.clear();

const form = document.querySelector('[data-js="form"]');
const firstFieldInput = document.querySelector('[data-js="first-name"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  form.reset();
  firstFieldInput.focus();
});
