function reverseString(str) {
  let array=[];
  let reverseStr;
  let len=str.length-1;
  for (let i = 0; i < str.length; i++) {
    char=str[len--];
    array.push(char);
  }
  reverseStr=array.join('');
  return reverseStr;
}

module.exports = reverseString;
