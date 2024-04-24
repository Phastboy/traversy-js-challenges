function formatPhoneNumber(numbersArray) {
  let areaCode=numbersArray.slice(0, 3).join('');
  let prefix=numbersArray.slice(3, 6).join('');
  let lineNumber=numbersArray.slice(6).join('');
  let phoneNumber=`(${areaCode}) ${prefix}-${lineNumber}`;
  return phoneNumber;
}

module.exports = formatPhoneNumber;
