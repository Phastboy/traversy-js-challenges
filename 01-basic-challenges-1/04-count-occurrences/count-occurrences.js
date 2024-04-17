function countOccurrences(str, char) {
  let occurrences=0;
  for (let i = 0; i < str.length; i++) {
    if (char.toUpperCase()==str[i].toUpperCase()) {
      occurrences++;
    }
  }
  return occurrences;
}

module.exports = countOccurrences;
