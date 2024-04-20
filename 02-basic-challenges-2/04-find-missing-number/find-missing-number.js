function findMissingNumber(numArray) {
  let number;
  let n=numArray.length+1;
  let total=0;
  let length=numArray.length;
  if (length===0) {
    number=1;
  } else {
    for (let i = 0; i < numArray.length; i++) {
      const element = numArray[i];
      total+=element;
    }
    let assumedTotal=(n*(n+1))/2;
    number=assumedTotal-total;
  }
  return number;
}

module.exports = findMissingNumber;
