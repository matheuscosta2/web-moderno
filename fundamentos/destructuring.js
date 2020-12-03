
const people = {
    name: 'Ana',
    age: 5,
    address: {
        street: 'Rua ABC',
        number: 1080
    }
}

const { name, age } = people
console.log(name, age)

const { name: N, age: A} = people
console.log(N, A)

const { lastName, goodHumor = true} = people    
console.log(lastName, goodHumor)

const { address: {street, number, cep} } = people
console.log(street, number, cep)