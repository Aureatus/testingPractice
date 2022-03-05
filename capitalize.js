const capitalize = (input) => {
  const splitInput = input.split("");
  splitInput[0] = splitInput[0].toUpperCase();
  return splitInput.join("");
};

module.exports = capitalize;
