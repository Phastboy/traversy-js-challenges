const reverseStr=require('../07-reverse-string/reverse-string');
function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = reverseStr(formattedStr);
  return formattedStr === reversedStr;
}

module.exports = isPalindrome;
