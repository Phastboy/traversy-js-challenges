function fizzBuzzArray(number) {
  let array=[];
  let num=0;
  for (let i = 0; i < number; i++) {
    num++;
    if (num%3==0 && num%5==0) {
      array.push('FizzBuzz');
    } else if(num%5==0) {
      array.push('Buzz');
    } else if (num%3==0) {
      array.push('Fizz');
    } else {
      array.push(num);
    }
  }
  return array;
}
console.log(fizzBuzzArray(45));
module.exports = fizzBuzzArray;
