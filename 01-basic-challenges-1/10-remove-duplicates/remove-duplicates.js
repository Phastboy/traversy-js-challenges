function removeDuplicates(array) {
  let noDuplicates=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i]!=array[i+1] && i<array.length) {
      if (!noDuplicates.includes(array[i])) {
        noDuplicates.push(array[i]);
      }
    } else if(array[i]===array[i+1] && i<array.length) {
    }
  }
  return noDuplicates;
}
console.log(removeDuplicates([1, 2, 3, 1, 4, 5, 4]));

module.exports = removeDuplicates;
