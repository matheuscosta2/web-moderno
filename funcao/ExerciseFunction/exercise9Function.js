/*09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política declassificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notaspossuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menorque 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhumarredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ouseja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40e o aluno será aprovado.*/

function gradeSystem(grade) {
    let newGrade = adjustedGrade(grade)
    if (grade >= 40) {
        return `approved with grade ${newGrade}`
    } else return `approved with grade ${newGrade}`
}

function adjustedGrade(grade) {
    if (grade % 5 > 2) {
        return grade + (5 - (grade % 5))
    } else {
        return grade
    }
}

console.log(gradeSystem(38))