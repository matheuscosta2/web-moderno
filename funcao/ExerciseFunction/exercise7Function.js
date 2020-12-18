function bhaskara (ax2, bx, c) {
    delta = Math.pow(bx,2) - 4 * ax2 * c
    sqrt = Math.sqrt(delta)
    divisor = ax2 * 2
    bhaskar1 = (-(bx) + sqrt) / divisor
    bhaskar2 = (-(bx) - sqrt) / divisor
    resultBhaskar1 = Math.floor(bhaskar1) 
    resultBhaskar2 = Math.floor(bhaskar2)
    if(delta > 0) {
        resultBhaskar = [bhaskar1, bhaskar2]
        console.log(resultBhaskar)    
    } else if(delta = 0) {
        console.log(resultBhaskar)
    } else {
        console.log("Delta é negativo")
    }
}

bhaskara(2, -16, -18)