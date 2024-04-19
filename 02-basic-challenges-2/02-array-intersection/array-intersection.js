function arrayIntersection(numArrayOne, numArrayTwo) {
  let arrayIntersection=[];
  for (let i = 0; i < numArrayOne.length; i++) {
    const arrayOneElements = numArrayOne[i];
    for (let i = 0; i < numArrayTwo.length; i++) {
      const arrayTwolements = numArrayTwo[i];
      if (arrayOneElements==arrayTwolements) {
        arrayIntersection.push(arrayOneElements);
      }
    }
  }
  return arrayIntersection;
}

module.exports = arrayIntersection;
