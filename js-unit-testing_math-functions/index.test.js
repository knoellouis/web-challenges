import { add, subtract, multiply, divide } from "./index.js";

test("gets the sum of the two arguments when ran", () => {
  const result = add(1, 3);
  expect(result).toBe(4);
});
test("subtracts the second variable from the first variable when ran", () => {
  const result = subtract(5, 2);
  expect(result).toBe(3);
});
test("multiplies the first variable by the second variable when ran", () => {
  const result = multiply(5, 2);
  expect(result).toBe(10);
});
test("divides the first variable by the second variable when ran", () => {
  const result = divide(10, 2);
  expect(result).toBe(5);
});
test("divides the first variable by the second variable when ran, if the second variable is equal to 0, 'You should not do this' should be returned", () => {
  const result = divide(10, 0);
  expect(result).toBe("You should not do this!");
});
