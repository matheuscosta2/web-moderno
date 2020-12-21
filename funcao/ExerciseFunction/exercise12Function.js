function factory(number) {
 if(number == 0) {
   return 1
 } else {
   return number * factory(number - 1)
 }
}

console.log(factory(0))