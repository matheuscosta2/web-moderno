/*14)​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua trêscasos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos comescassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crietambém um default, que retornará uma mensagem de erro no console.*/
function fruitStore(typeOfFruit) {
  switch (typeOfFruit) {
    case 'kiwi':
      console.log("Estamos com escassez de kiwis");
      break;
    case "maçã":
      console.log("Não vencemos esta fruta aqui");
      break;
    case "melancia":
      console.log("Aqui está, são 3 reais o kilo");
      break;
    default:
      console.log("Opção inválida");
  }
}

fruitStore('Maçã')