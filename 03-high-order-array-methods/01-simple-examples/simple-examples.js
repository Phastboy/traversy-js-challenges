const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const newNum=numbers.map((item) => {
  return item;
})
console.log(newNum);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const evenNumbers=numbers.filter((item) => {
  return item%2===0;
})
console.log(evenNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sum=numbers.reduce((previous, current) => {
  return previous+current;
}, 0)
console.log(sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach(element => {
  console.log(element);
});

 /**
 * find: Returns the first array element that satisfies a specified condition.
 */

const seek=numbers.find((item) => {
  return item===3;
})
console.log(seek);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const content=numbers.some((item) => {
  return item===4;
}) 
console.log(content);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const check=numbers.every((item) => {
  return item>0;
})
console.log(check);
