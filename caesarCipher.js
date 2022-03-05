const caesarCipher = (string, shiftNumber) => {
  const array = string.toLowerCase().split("");
  let charCodeArray = array.map((x, index, array) => array[index].charCodeAt());
  charCodeArray = charCodeArray.map((x) => {
    if (x === 122) {
      return 96 + shiftNumber;
    }

    if (x > 122) {
      return x;
    }

    if (x < 97) {
      return x;
    }
    return x + shiftNumber;
  });
  const shiftedStringArray = charCodeArray.map((x) => String.fromCharCode(x));
  const shiftedString = shiftedStringArray.join("");
  return shiftedString;
};

module.exports = caesarCipher;
