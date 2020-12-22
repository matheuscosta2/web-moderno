/*17)​ Um funcionário irá receber um aumento de acordo com o seu plano detrabalho, de acordo com a tabela abaixo:PlanoAumentoA10%B15%C20%Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seunovo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/
const salaryPlan = (plan, salary) => {
  switch (plan) {
    case "A":
      result = salary * 0.1;
      console.log(salary + result);
      break;
    case "B":
      result = salary * 0.15;
      console.log(salary + result);
      break;
    case "C":
      result = salary * 0.2;
      console.log(salary + result);
      break;
    default:
      console.log("Invalid plan");
  }
};

salaryPlan("C", 2000);
