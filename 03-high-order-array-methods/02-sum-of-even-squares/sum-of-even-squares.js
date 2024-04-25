const evenNumbers=require("../../03-high-order-array-methods/01-simple-examples/simple-examples.js");

function sumOfEvenSquares(numbers) {
  evenNumbers;
  const squares=evenNumbers.map((item) => {
    return item*item;
  });
  const sumOfEvenSquares=squares.reduce((previous, current) => {
    return previous+current;
  }, 0);
  return sumOfEvenSquares;
}
console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));

module.exports = sumOfEvenSquares;
