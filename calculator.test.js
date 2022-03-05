const calculator = require(`./calculator`);

test("Add", () => {
  expect(calculator().add(2, 3)).toBe(5);
});

test("Subtract", () => {
  expect(calculator().subtract(4, 3)).toBe(1);
});

test("Divide", () => {
  expect(calculator().divide(6, 3)).toBe(2);
});

test("Multiply", () => {
  expect(calculator().multiply(2, 3)).toBe(6);
});
