console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  // for (let i = 1; i <= 5; i++) {
  //   let imageElement = document.createElement("img");
  //   imageElement.setAttribute("src", "assets/star-empty.svg");
  //   starContainer.append(imageElement);
  // }
  //   imageElement.addEventListener("click", (event) => {
  //     const clickedImageNumber = event.target.attributes["data-js"].nodeValue;
  //     fillStars(clickedImageNumber);
  //   });
  // }

  // function fillStars(num) {
  //   for (let i = 1; i <= 5; i++) {
  //     let imageToBeFilled = document.querySelectorAll("img")[i - 1];
  //     i >= num ? imageToBeFilled.setAttribute("src", "assets/star-filled.svg"): ;
  //   }
  // }

  // starContainer.addEventListener("click", (e) => {
  //   console.log("star created");
  //   for (let i = 0; i < starContainer.children.length; i++) {
  //     if (starContainer.children[i] === e.target) {
  //       for (let j = 0; j < starContainer.children.length; j++) {
  //         const star = starContainer.children[j];
  //         const src =
  //           j <= i ? "assets/star-filled.svg" : "assets/star-empty.svg";
  //         if (star.getAttribute("src") !== src) {
  //           star.src = src;
  //         }
  //       }
  //     }
  //   }
  // });

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");
    star.src =
      i <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";

    star.addEventListener("click", () => {
      renderStars(i);
    });

    starContainer.append(star);
  }

  // --^-- write or modify code above this line --^--
}

renderStars(5);
