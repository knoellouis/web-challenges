console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

// const receivedPassword = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("Access denied!");
} else {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd
const number = 9;
if (number % 2 !== 0) {
  console.log("odd number");
} else {
  console.log("even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 4;
if (numberOfHotdogs < 5) {
  console.log("price: 2 euro per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("price: 1.50 euro per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("price: 1 euro per hotdog");
} else {
  console.log("price: 0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 19;

let statement = "";

currentHour < 17
  ? (statement = "Still need to learn...")
  : (statement = "Partytime!!!");

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Marcel" ? "Coach" : userName + "!");

console.log(greeting);
