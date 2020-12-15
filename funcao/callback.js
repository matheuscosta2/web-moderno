const fabricantes = ['Mercedes', 'Audi', 'BMW']

function print(name, index) {
    console.log(`${index + 1}. ${name}`)
}

fabricantes.forEach(print)
fabricantes.forEach(fabricantes => console.log(fabricantes))
