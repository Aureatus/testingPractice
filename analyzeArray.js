const analyzeArray = (inputArray) => {
  const average =
    inputArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    ) / inputArray.length;

  const min = Math.min(...inputArray);

  const max = Math.max(...inputArray);

  const length = inputArray.length;

  return { average, min, max, length };
};

module.exports = analyzeArray;
