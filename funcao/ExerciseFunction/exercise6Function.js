/*06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. Aprimeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segundaretornará o valor da aplicação sob o regime de juros compostos.*/

let simplesInterest;
let profitPerMonth;
let compoundInterestResult;

function simpleFinancialDepartment(initialCap, interestRate, applicationTime) {
  simplesInterest = initialCap * interestRate;
  profitPerMonth = simplesInterest * applicationTime;
  console.log(simplesInterest + profitPerMonth);
}

simpleFinancialDepartment(200, 0.2, 10);

function compoundFinancialDepartment(
  initialCap,
  interestRate,
  applicationTime
) {
  compoundInterestResult =
    initialCap * Math.pow(1 + interestRate, applicationTime);
  finalAmount = compoundInterestResult.toFixed(2);
  console.log(finalAmount);
}

compoundFinancialDepartment(1400, 0.07, 2);
