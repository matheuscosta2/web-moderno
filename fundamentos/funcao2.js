//Armazenando uma função em uma variável
const printSum = function(a, b) {
    console.log(a + b)    
}

printSum(2, 3)

// Armazenando uma função arow em uma variável
const sum = (a, b) => {
    return a + b
}

console.log(sum(2, 3))

//Retorno implicito
const subs = (a, b) => a - b
console.log(subs(2, 3))

const print2 = a => console.log(a)
print2('Legal!')