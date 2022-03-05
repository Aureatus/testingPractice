const reverse = (input) => {
  const array = input.split("");
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray.join("");
};

module.exports = reverse;
