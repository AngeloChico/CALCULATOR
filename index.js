function calculate() {
  const num1 = document.getElementById('num1').value;
  const operation = document.getElementById('operation').value.trim();
  const num2 = document.getElementById('num2').value;
  const resultField = document.getElementById('result');

  resultField.textContent = '';

  if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
      resultField.textContent = "Invalid input. Please enter valid numbers.";
      return;
  }

  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  let result;

  switch (operation) {
      case '+':
          result = number1 + number2;
          break;
      case '-':
          result = number1 - number2;
          break;
      case '*':
          result = number1 * number2;
          break;
      case '/':
          if (number2 === 0) {
              resultField.textContent = "Error: Division by zero is not allowed.";
              return;
          }
          result = number1 / number2;
          break;
      default:
          resultField.textContent = "Invalid operation. Please use +, -, *, or /.";
          return;
  }

  resultField.textContent = "Result: " + result;
}
