let simplesInterest
let profitPerMonth
let compoundInterestResult

function simpleFinancialDepartment(initialCap, interestRate, applicationTime) {
    simplesInterest = initialCap * interestRate
    profitPerMonth = simplesInterest * applicationTime 
    console.log(simplesInterest + profitPerMonth)
}

simpleFinancialDepartment(200, 0.2, 10)

function compoundFinancialDepartment(initialCap, interestRate, applicationTime) {
    compoundInterestResult = initialCap * Math.pow((1 + interestRate), applicationTime)
    finalAmount = compoundInterestResult.toFixed(2)
    console.log(finalAmount)
}

compoundFinancialDepartment(1400, 0.07, 2)
