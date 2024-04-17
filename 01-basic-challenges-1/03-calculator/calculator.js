function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      result=a+b;
      break;
    case '-':
      result=a-b;
      break;
    case '*':
      result=a*b;
      break;
    case '/':
      result=a/b;
      break;
    default:
      throw new Error('Invalid operator');
      break;
  }
  return result;
}

module.exports = calculator;
