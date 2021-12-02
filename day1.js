const data = require("./day1.json");

const isBiggerThanPrev = (curr, arr, index) => {
  if (index === 0 || index > arr.length) return false;
  return +curr > +arr[index - 1];
};

const findBiggerNumbers = (input) =>
  input.reduce(
    (acc, curr, index) => acc + (isBiggerThanPrev(curr, input, index) ? 1 : 0),
    0
  );

const doPart1 = () => {
  return findBiggerNumbers(data);
};

const doPart2 = () => {
  const measurements = data.map((t) => +t);

  let previousMeasurementSum = measurements.slice(0, 3).reduce((a, b) => a + b, 0);
  let increasesCounter = 0;

  for (let i = 1; i < measurements.length; i++) {
    const measurementSum = measurements.slice(i, i + 3).reduce((a, b) => a + b, 0);

    if (measurementSum > previousMeasurementSum) {
      increasesCounter++;
    }

    previousMeasurementSum = measurementSum;
  }

  return increasesCounter;
}
console.log(doPart2());
