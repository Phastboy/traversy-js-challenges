function areAllCharactersUnique(str) {
  let charArray=[];
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (charArray.includes(element)) {
      return false;
    } else {
      charArray.push(element);
    }
  }
  return true;
}

module.exports = areAllCharactersUnique;
