/*16)​Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebecomo parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.*/
const Calculator = (number1, operation, number2) => {
  switch (operation) {
    case "+":
      console.log(number1 + number2);
      break;
    case "-":
      console.log(number1 - number2);
      break;
    case "*":
      console.log(number1 * number2);
      break;
    case "/":
      console.log(number1 / number2);
      break;
    default:
      console.log("Invalid operation");
  }
};

Calculator(1, "-", 1); 
