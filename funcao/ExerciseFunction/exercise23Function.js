/*23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada doaluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código doaluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo*/ 

let average = (id, grade1, grade2, grade3) => {
  let grade = [];
  grade.push(grade1);
  grade.push(grade2);
  grade.push(grade3);
  grade.sort((a, b) => (a - b));

  let finalAverage = (grade[0] * 4 + grade[1] * 3 + grade[2] * 3) / 10;
  console.log(
    `Id: ${id}, Notas: ${grade1}, ${grade2}, ${grade3}. ${
      finalAverage < 5 ? "Reprovado" : "Aprovado"
    }`
  );
};

average(2, 5, 5, 5);
