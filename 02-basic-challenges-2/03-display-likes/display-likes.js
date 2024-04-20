function displayLikes(strArray) {
  let length=strArray.length
  if (strArray===0) {
    return ('no one likes this');
  } else if (length===1){
    return `${strArray[0]} likes this`;
  }else if(length===2) {
    return `${strArray[0]} and ${strArray[1]} like this`;
  }else if(length===3) {
    return `${strArray[0]}, ${strArray[1]} and ${strArray[2]} like this`;
  }else {
    return `${strArray[0]}, ${strArray[1]} and ${length-2} others like this`
  }
}

module.exports = displayLikes;
