const grade = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in grade) {
    console.log(i, grade[i])
}

const people = {
    name: 'Ana',
    lastName: 'Silva',
    age: 29,
    weight: 64
}

for(let data in people) {
    console.log(`${data} = ${people[data]}`)
}