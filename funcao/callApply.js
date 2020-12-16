function getPrice(tax = 0, coin = 'R$') {
    return `$(coin) ${this.price * (1 - this.desc) * (1 + tax)}` 
}

const pruduct = {
    name: 'Notebook',
    price: 4589,
    desc:0.15,
    getPrice
}

global.price = 200
global.desc = 0.1
console.log(getPrice())
console.log(product.getPrice())

const car = { price: 49990, desc: 0.20}

console.log(getPrice.call(car))
console.log(getPrice.call(car))

console.log(getPrice.call(car, 0.17, '$'))
console.log(getPrice.apply(car, [0.17, '$']))