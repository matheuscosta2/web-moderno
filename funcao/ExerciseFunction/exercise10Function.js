/*10)​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne trueou false.*/

function dividedByThree(number) {
    if (number % 3 == 0) {
        return true
    } else {
        return false
    }
}
console.log(dividedByThree(14))