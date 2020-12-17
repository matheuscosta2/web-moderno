function triagleComparation (side1, side2, side3) {
    if(side1 === side2 && side2 === side3) {
        console.log('Equilatero')
    } else if(side1 === side2 || side2 === side3 || side1 === side3) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}

triagleComparation(2, 3, 2)
triagleComparation(2, 2, 2)
triagleComparation(2, 3, 1)