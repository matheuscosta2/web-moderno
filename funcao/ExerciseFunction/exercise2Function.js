/*02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quantoao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)*/

function triagleComparation(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log("Equilatero");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
}

triagleComparation(2, 3, 2);
triagleComparation(2, 2, 2);
triagleComparation(2, 3, 1);
