console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  card.id === "2" ? console.log(card) : "";
});

console.log(
  " Only Card with id 2 ----------------------------------------------",
);

const allCardsWith3Tags = cards.filter((card) => {
  card.tags.length === 3 ? console.log(card) : "";
});
console.log("allCardsWith3Tags ----------------------------------------------");

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  card.isBookmarked === false ? console.log(card) : "";
});
console.log(
  "allCardsThatAreNotBookmarked ----------------------------------------------",
);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  const hasMatchingTag = card.tags.some((tag) => {
    return tag === "html" || tag === "js";
  });
  card.isBookmarked && hasMatchingTag ? console.log(card) : "";
});
console.log(
  "allCardsWithTagsHTMLOrJSThatAreBookmarked ----------------------------------------------",
);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
