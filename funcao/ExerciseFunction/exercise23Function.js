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
