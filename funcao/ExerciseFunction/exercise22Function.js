/*22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe comoparâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. Aanuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juroscompostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function anualValue(month, value) {
  if (month > 0 && month < 13) {
    late = month - 1;
    return value * (1 + 0.5) ** late;
  } else {
    return "Error";
  }
}

console.log(anualValue(2, 100));
