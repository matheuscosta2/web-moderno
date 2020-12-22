/*12)​ Faça um algoritmo que calcule o fatorial de um número.*/
function factory(number) {
 if(number == 0) {
   return 1
 } else {
   return number * factory(number - 1)
 }
}

console.log(factory(0))