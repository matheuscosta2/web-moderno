function onlyGoodGrade(grade) {
    if(grade >= 7) {
        console.log('Aprovado com ' + grade)
    }
}

onlyGoodGrade(8.1)
onlyGoodGrade(6.1)

function onlyTrue (value) {
    if(value) {
        console.log('É verdade...' + value)
    }
}
onlyTrue()
onlyTrue(null)