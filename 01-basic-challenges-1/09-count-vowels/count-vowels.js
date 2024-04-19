function countVowels(string) {
  let str=string.toLowerCase();
  let count=0;
  // let char='a' || 'e' || 'i' || 'o' || 'u';
  for (let i = 0; i < str.length; i++) {
    strChars=str[i];
    if (strChars==='a'||
      strChars==='e'||
      strChars==='i'||
      strChars==='o'||
      strChars==='u'
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
