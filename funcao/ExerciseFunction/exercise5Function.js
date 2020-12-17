function convertToDecimal (decimal){
    valueOnReais = `R$ ${decimal.toFixed(2).toString().replace(".",".")}`
    console.log(valueOnReais)
}

convertToDecimal(0.1 + 0.2)