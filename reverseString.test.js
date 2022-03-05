const reverse = require(`./reverseString`);

test("String is reversed.", () => {
  expect(reverse("abc")).toMatch("cba");
});
