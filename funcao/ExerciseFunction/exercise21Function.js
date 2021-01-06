/*21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniadoconsiderando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menosde 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

const value = 100;

const healthPlan = (age) => {
  if (age < 0) {
    return "Error";
  } else if (age < 10) {
    return value + 80;
  } else if (age < 30) {
    return value + 50;
  } else if (age < 60) {
    return value + 95;
  } else {
    return value + 130;
  }
};

console.log(healthPlan(9));
