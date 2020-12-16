function createProduct(name, price) {
    return {
        name,
        price,
        discount: 0.1
    }
}

console.log(createProduct('Notebook', 2999.50))
console.log(createProduct('Ipad', 1999.50))
