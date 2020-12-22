/*20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulaspara um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deveinformar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1*/

function caixaEletronico(valorSaque) {
  let counter100 = 0;
  let counter50 = 0;
  let counter10 = 0;
  let counter5 = 0;
  let counter1 = 0;
  let valorNota = caculaValor(valorSaque);
  while (valorSaque >= valorNota) {
    switch (valorNota) {
      case 100:
        valorSaque -= 100;
        counter100++;
        break;
      case 50:
        valorSaque -= 50;
        counter50++;
        break;
      case 10:
        valorSaque -= 10;
        counter10++;
        break;
      case 5:
        valorSaque -= 5;
        counter5++;
        break;
      case 1:
        valorSaque -= 1;
        counter1++;
        break;
    }
    valorNota = caculaValor(valorSaque);
  }
  return elaborarResultado(
    counter100,
    counter50,
    counter10,
    counter5,
    counter1
  );
}

function caculaValor(valorSaque) {
  if (valorSaque >= 100) {
    return 100;
  } else if (valorSaque >= 50) {
    return 50;
  } else if (valorSaque >= 10) {
    return 10;
  } else if (valorSaque >= 5) {
    return 5;
  } else if (valorSaque >= 1) {
    return 1;
  }
}

function elaborarResultado(
  counter100,
  counter50,
  counter10,
  counter5,
  counter1
) {
  let result = "";
  if (counter100 > 0) {
    result += `${counter100} nota(s) de R$100 `;
  }
  if (counter50 > 0) {
    result += `${counter50} nota(s) de R$50 `;
  }
  if (counter10 > 0) {
    result += `${counter10} nota(s) de R$10 `;
  }
  if (counter5 > 0) {
    result += `${counter5} nota(s) de R$5 `;
  }
  if (counter1 > 0) {
    result += `${counter1} nota(s) de R$1 `;
  }
  return result;
}

console.log(caixaEletronico(153));
