
/*15)​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revendapossui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso ocomprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certezaque não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:“Não trabalhamos com este tipo de automóvel aqui”.*/
function buyCar(car) {
  switch (car) {
    case "hatch":
      console.log("Compra efetuada com sucesso");
      break;
    case "sedan":
    case "motocicletas":
    case "caminhonete":
      console.log("Tem certeza que não prefere este modelo?");
      break;
    default:
      console.log("Não trabalhamos com este tipo de automóvel aqui");
  }
}
