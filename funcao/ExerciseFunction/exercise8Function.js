/*08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantémregistro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se omesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar umvetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu piorjogo. (Número do pior jogo).*/

let stringList = "30, 10, 12, 9, 25, 28";

function gamePoint(stringList) {
  let points = stringList.split(", ");
  let records = 0;
  let defeat = 1;
  let bestGame = points[0];
  let worstGame = points[0];

  for (let i = 1; i < points.length; i++) {
    if (points[i] > bestGame) {
      bestGame = points[i];
      records++;
    } else if (points[i] < worstGame) {
      worstGame = points[i];
      worstGame = i + 1;
    }
  }
  return [records, worstGame]
  console.log(points.length)
}

console.log(gamePoint(stringList))



