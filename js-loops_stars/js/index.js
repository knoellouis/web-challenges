console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let i = 1; i <= 5; i++) {
    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", "assets/star-empty.svg");
    imageElement.setAttribute("data-js", i);
    starContainer.append(imageElement);

    imageElement.addEventListener("click", (event) => {
      const clickedImageNumber = event.target.attributes["data-js"].nodeValue;
      fillStars(clickedImageNumber);
    });
  }

  function fillStars(num) {
    for (let i = 1; i <= num; i++) {
      let imageToBeFilled = document.querySelectorAll("img")[i - 1];
      imageToBeFilled.setAttribute("src", "assets/star-filled.svg");
    }
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
