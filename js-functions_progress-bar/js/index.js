console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let pageHeight = document.body.clientHeight;
  console.log(
    "scroll position:",
    scrollPosition,
    "window height:",
    windowHeight,
    "page height:",
    pageHeight,
  );
  return Math.round((scrollPosition / (pageHeight - windowHeight)) * 100);
}

document.addEventListener("scroll", () => {
  progressBar.style.width = `${calculateScrollPercentage()}%`;
});
