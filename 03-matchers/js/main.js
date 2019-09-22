function calculate(inputValue) {
  const regex = /\+|\-|\*|\//;
  const numbers = inputValue.split(regex);
  const numberA = parseInt(numbers[0]);
  const numberB = parseInt(numbers[1]);

  const operation = inputValue.match(regex);
  if (Number.isNaN(numberB) || Number.isNaN(numberB) || operation == null) {
    updateResult('Operation not recognised');
    return;
  }
  const calculator = new Calculator();
  calculator.add(numberA);

  let result;
  switch (operation[0]) {
    case '+':
      result = calculator.add(numberB);
      break;
    case '-':
      result = calculator.subtract(numberB);
      break;
    case '*':
      result = calculator.multiply(numberB);
      break;
    case '/':
      result = calculator.divide(numberB);
      break;
  }
  updateResult(result);
}

function updateResult(result) {
  const element = document.getElementById('result');

  if (element) {
    element.innerText = result;
  }
}
