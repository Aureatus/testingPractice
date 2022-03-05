const caesarCipher = require("./caesarCipher");

test("1 letter lowercase shift", () => {
  expect(caesarCipher("abcdefg", 1)).toBe("bcdefgh");
});

test("2 letter lowercase shift", () => {
  expect(caesarCipher("abcdefg", 2)).toBe("cdefghi");
});

test("1 letter uppercase shift", () => {
  expect(caesarCipher("Abcdefg", 1)).toBe("bcdefgh");
});

test("Wrapping test", () => {
  expect(caesarCipher("uvwxyz", 1)).toBe("vwxyza");
});

test("Punctuation test 1", () => {
  expect(caesarCipher("abc.def", 1)).toBe("bcd.efg");
});

test("Punctuation test 2", () => {
  expect(caesarCipher("abc[def", 1)).toBe("bcd[efg");
});
