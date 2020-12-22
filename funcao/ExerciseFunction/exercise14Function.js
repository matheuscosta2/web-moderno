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