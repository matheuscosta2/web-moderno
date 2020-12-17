let simplesInterest
let profitPerMonth
let compoundInterestResult = 0

function simpleFinancialDepartment(initialCap, interestRate, applicationTime) {
    simplesInterest = initialCap * interestRate
    profitPerMonth = simplesInterest * applicationTime 
    console.log(simplesInterest +profitPerMonth)
}

simpleFinancialDepartment(200, 0.2, 10)

//EXERCICIO INACABADO