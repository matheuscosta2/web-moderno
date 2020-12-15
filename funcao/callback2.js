const grade = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Without callback
const lowGrade1 = []
for (let i in grade) {
    if(grade[i] < 7) {
        lowGrade1.push(grade[i])
    }
}
console.log(lowGrade1)

//with callback
const lowGrade2 = grade.filter(function (grade) {
    return grade < 7
})

const lowGrade3 = grade.filter(grade => grade < 7)