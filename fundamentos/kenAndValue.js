const meeting = 'Opa' //contexto léxico 1

function exec() {
    const meeting = 'Falaaa' // contexto lexico 2
    return meeting
}
// Objetos são grupos aninhados de chave e valor.

const client = {
    name: 'Pedro',
    age: 32,
    weight: 98,
    address: {
        publicPlace: 'Rua Pecanha',
        number: 123
    }
}

console.log(meeting)
console.log(exec())
console.log(client)
