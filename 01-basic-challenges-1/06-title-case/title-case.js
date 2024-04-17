function titleCase(str) {
  let titleStr='';
  let array=str.split(' ');
  let char;
  let newStr;
  let newArray=[];
  for (let i in array) {
    let element = array[i];
    char=element.split('');
    char[0]=char[0].toUpperCase();
    for (let i = 0; i < char.length; i++) {
      if (i>0) {
        char[i]=char[i].toLowerCase();
      }
    }
    newStr=char.join('');
    newArray.push(newStr);
    
  }
  titleStr=newArray.join(' ');
  return titleStr;
}

module.exports = titleCase;
