const analyzeArray = require(`./analyzeArray`);

test("average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
