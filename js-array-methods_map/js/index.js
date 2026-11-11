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
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  const cardAnswer = card.answer;
  const lowerCaseAnswers = cardAnswer.toLowerCase();
  console.log(lowerCaseAnswers);
  return lowerCaseAnswers;
}); // ['as often as you like.', ...]

const questionsAndAnswersTogether = cards.map((card) => {
  const question = card.question;
  const answer = card.answer;
  console.log(`${question} - ${answer}`);
  return `${question} - ${answer}`;
}); // ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = cards.map((card) => {
  const question = card.question;
  const answer = card.answer;
  const combinationsObject = { question: question, answer: answer };
  console.log(combinationsObject);
  return combinationsObject;
}); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
