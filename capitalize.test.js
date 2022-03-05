const capitalize = require(`./capitalize`);

test("First letter is capitalized", () => {
  expect(capitalize(`abcdefg`)).toMatch(/^[A-Z]/);
});
