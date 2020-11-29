let value 
console.log(value)

value = null // ausência de valor
console.log(value)
//console.log(value.toString()) Error

const product = {}
console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product.price)

product.price = undefined
console.log(!!product.price)
delete product.price
console.log(product)

product.price = null
console.log(!!product.price)
console.log(product)

