function getIntegerBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while(option != -1) {
    option = getIntegerBetween(-1, 10)
}
console.log(`Opção escolhida foi ${option}.`)

console.log('Até a prox')