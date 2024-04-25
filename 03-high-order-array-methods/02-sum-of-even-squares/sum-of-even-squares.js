function sumOfEvenSquares(numbers) {
  const evenNumbers=numbers.filter((item) => {
    return item%2===0;
  });
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
