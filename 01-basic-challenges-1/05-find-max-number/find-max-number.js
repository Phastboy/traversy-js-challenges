function findMaxNumber(array) {
  let maxNumber=0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]>=array[i+1]) {
      maxNumber=array[i];
    } else if(array[i]<array[i+1]&&(i+1)<array.length) {
      maxNumber=array[i+1];
    }
  }
  return maxNumber;
}

module.exports = findMaxNumber;
