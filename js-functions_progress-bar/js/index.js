console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let pageHeight = document.body.clientHeight;
  let scrollPercentage = Math.round(
    (scrollPosition / (pageHeight - windowHeight)) * 100,
  );
  return scrollPercentage;
}

document.addEventListener("scroll", () => {
  progressBar.style.width = `${calculateScrollPercentage()}%`;
});
